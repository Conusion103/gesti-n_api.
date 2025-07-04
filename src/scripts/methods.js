// POST new product to API
export let uploadingProduct = async (endPoint, product) => {
  try {
    const response = await fetch(endPoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    });
    if (!response.ok) throw new Error(`Error uploading product: ${response.status} ${response.statusText}`);
    return true;
  } catch (error) {
    alert(error.message || "Unknown error uploading product");
  }
}

// GET all products from API
export let reserchingProduct = async (endPoint) => {
  try {
    let response = await fetch(endPoint);
    if (!response.ok) throw new Error(`Error fetching products: ${response.status} ${response.statusText}`);
    let data = await response.json();
    return data;
  } catch (error) {
    alert(error.message || "Unknown error fetching products");
  }
}

// PUT updated product by id
export let updatingProduct = async (endPoint, id, updatedProduct) => {
  try {
    const response = await fetch(`${endPoint}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedProduct)
    });
    if (!response.ok) throw new Error(`Error updating product: ${response.status} ${response.statusText}`);
    return true;
  } catch (error) {
    alert(error.message || "Unknown error updating product");
  }
}

// DELETE product by id
export let deletingProduct = async (endPoint, id) => {
  try {
    const response = await fetch(`${endPoint}/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error(`Error deleting product: ${response.status} ${response.statusText}`);
    return true;
  } catch (error) {
    alert(error.message || "Unknown error deleting product");
  }
}




