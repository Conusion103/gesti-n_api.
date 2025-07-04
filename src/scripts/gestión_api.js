// main.js

import { generalValidate, nameValidate, priceValidate, amountValidate } from "./validate.js";
import { filling_array, avoidName } from "./product.js";
import { reserchingProduct, uploadingProduct, updatingProduct, deletingProduct } from "./methods.js";
import { showSuccess, showError, showConfirm } from "./alerts.js";

const endPoint = "http://localhost:3000/product";
const $btnSubmit = document.getElementById("btnSubmit");
const $container = document.querySelector(".products-placeholder");
const $form = document.querySelector("form");

$btnSubmit.addEventListener('click', async (e) => {
  e.preventDefault();

  // Validate inputs
  let name_ = generalValidate('name', nameValidate)?.toLowerCase();
  let price = generalValidate('price', priceValidate);
  let amount = generalValidate('amount', amountValidate);

  if (!name_ || !price || !amount) {
    showError("Invalid product data");
    return;
  }

  const product = filling_array(name_, price, amount);
  const productList = await reserchingProduct(endPoint);
  const editingId = $btnSubmit.dataset.editingId;

  if (editingId) {
    // Update product
    await updatingProduct(endPoint, editingId, product);
    delete $btnSubmit.dataset.editingId;
    $btnSubmit.textContent = "Submit";
    showSuccess("Product updated");
  } else {
    // Create product (check duplicate name)
    if (avoidName(productList, name_)) {
      await uploadingProduct(endPoint, product);
      showSuccess("Product added");
    } else {
      showError("Name already exists");
      return;
    }
  }

  // Refresh UI and reset form
  const updatedList = await reserchingProduct(endPoint);
  renderProducts(updatedList, $container, endPoint);
  $form.reset();
  delete $btnSubmit.dataset.editingId;
  $btnSubmit.textContent = "Submit";
});

const renderProducts = (products, container, endpoint) => {
  container.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <p>Amount: ${product.amount}</p>
      <div class="card-actions">
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;

    // Delete product with confirmation
    card.querySelector(".delete-btn").addEventListener("click", async () => {
      const confirmed = await showConfirm(`Delete ${product.name}?`);
      if (confirmed) {
        await deletingProduct(endpoint, product.id);
        const updatedList = await reserchingProduct(endpoint);
        renderProducts(updatedList, container, endpoint);
        showSuccess("Product deleted");
      }
    });

    // Edit product
    card.querySelector(".edit-btn").addEventListener("click", () => {
      document.getElementById("name").value = product.name;
      document.getElementById("price").value = product.price;
      document.getElementById("amount").value = product.amount;

      $btnSubmit.textContent = "Update";
      $btnSubmit.dataset.editingId = product.id;
    });

    container.appendChild(card);
  });
};

// Initial load
document.addEventListener("DOMContentLoaded", async () => {
  const list = await reserchingProduct(endPoint);
  renderProducts(list, $container, endPoint);
});




