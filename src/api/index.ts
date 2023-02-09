import axios from 'axios';

export const getRandomColors = () => {
  return new Promise<any>((resolve, reject) =>
    setTimeout(
      () => resolve(axios.get('/random').then((response) => response.data)),
      1000,
    ),
  );
};

export const getPageColor = (page: string | number) => {
  return new Promise<any>((resolve, reject) =>
    setTimeout(
      () =>
        resolve(axios.get('/colors/' + page).then((response) => response.data)),
      1000,
    ),
  );
};

export const reGeneratePages = () => {
  return axios.post('/colors/generate');
};
