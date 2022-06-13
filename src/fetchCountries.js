const URL_ORIGIN = 'https://restcountries.com/v3.1/name';
const FIELDS_TO_REQUEST = ['name', 'capital', 'population', 'flags', 'languages'];

const searchParam = `fields=${FIELDS_TO_REQUEST.join(',')}`;

export function fetchCountries(name) {
  return fetch(`${URL_ORIGIN}/${name}?${searchParam}`).then(r => {
      if (r.status !== 200 && r.status !== 404) {
        return Promise.reject(`Error: ${r.message}`);
        };
      if (r.status === 404) {
        return Promise.reject('Error 404: Nothing to found');
        };
      return r.json();
    })
   .catch(err => console.log(`Something wrong... ${err}`));
}


