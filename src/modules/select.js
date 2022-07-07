import { getData } from './getData';

const select = () => {
  const cars = document.getElementById('cars');

  cars.addEventListener('input', e => {
    getData(e.target.value);
  });
};

export { select };