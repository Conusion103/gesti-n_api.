// Validate input by id using provided validation function
export let generalValidate = (htmlId, validateFn) => {
  try {
    let input_value = document.getElementById(htmlId).value.trim();
    validateFn(input_value);
    return input_value;
  }
  catch (error) { console.error(error.message); }
}

// Validate name is not empty
export let nameValidate = (name_) => {
  if (!name_) throw new Error("The name can't be empty");
};

// Validate price is a positive number
export let priceValidate = (price) => {
  price = parseFloat(price);
  if (!price || isNaN(price) || price <= 0) {
    throw new Error("Please, enter a valid price");
  }
};

// Validate amount is a non-negative integer
export let amountValidate = (amount) => {
  amount = parseInt(amount);
  if (!amount || isNaN(amount) || amount < 0) {
    throw new Error("Please, enter a valid amount");
  }
};

