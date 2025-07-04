let array = [];

// Create product object with given values
export let filling_array = (name_, price, amount) => {
  return { name: name_, price: price, amount: amount };
}

// Check if name is unique in data; return false if duplicate found
export let avoidName = (data, name_) => {
  array = []; // clear array before filling

  // Collect all product names (fixing incorrect decrement operator)
  for (let i in data) {
    array.push(data[i].name);
  }

  // Check if name_ already exists in data
  for (let j in data) {
    if (data[j].name === name_) {
      return false; // duplicate found
    }
  }
  return true; // name is unique
}

