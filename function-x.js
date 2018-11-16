function updateTip(value, toto) {
  console.log(value, toto);
}

// =

const updateTip = (value, toto) => {
  const tata = value + toto;
  console.log(value, toto);
};

updateTip(1);
