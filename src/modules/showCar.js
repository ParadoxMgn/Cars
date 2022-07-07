const showCar = (data, car) => {
  const showCars = document.getElementById('show-cars');

  const printCar = (cars) => {
    showCars.innerHTML =
      `<div>Тачка ${cars.brand} ${cars.model}</div>
         <div>Цена ${cars.price}$</div>`;
  };

  data.cars.forEach(cars => {
    if (car === '') {
      showCars.innerHTML = '';
    }
    if (car === cars.brand) {
      printCar(cars);
    }
  });
};

export { showCar };

