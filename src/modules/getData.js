import { showCar } from './showCar';

const getData = (car = '') => {
  return fetch('./db/cars.json')
    .then(resolve => resolve.json())
    .then(data => showCar(data, car))
    .catch(err => console.log(err));
};

export { getData };