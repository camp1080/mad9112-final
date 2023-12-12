let today = new Date();

function getDaysUntilChistmas(today) {
  let christmas = new Date(2023, 11, 25);

  console.log(
    `Number of days until Christmas: ${Math.ceil(
      (christmas - today) / 1000 / 60 / 60 / 24
    ).toFixed(0)}`
  );
}

getDaysUntilChistmas(today);
