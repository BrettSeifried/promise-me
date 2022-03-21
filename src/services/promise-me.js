// First
export async function animeData() {
  const resp = await fetch('https://api.jikan.moe/v4/anime?q=kuroko&sfw');
  const data = await resp.json();
  console.log('await-1', data.data);
  return data;
}

export const animeDataThen = () => {
  const data = fetch('https://api.jikan.moe/v4/anime?q=kuroko&sfw')
    .then((data) => data.json())
    .then((response) => {
      console.log('then-1', response.data);
    });
  return response;
};

// Second
export const pixelAwait = async () => {
  const resp2 = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode');
  const data2 = await resp2.json();
  console.log('await-2', data2);
  return data2;
};

export const pixelAwaitThen = () => {
  const data = fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
    .then((data) => data.json())
    .then((resp) => {
      console.log('then2', resp);
    });
};

//Third
export const thirdTry = async () => {
  const resp3 = await fetch('https://api.ip2country.info/ip?161.185.160.93');
  const data3 = await resp3.json();
  console.log('await-3', data3.countryName);
  return data3;
};

export const thenThird = () => {
  const data = fetch('https://api.ip2country.info/ip?161.185.160.93')
    .then((data) => data.json())
    .then((resp) => {
      console.log('then-3', resp.countryName);
    });
};

//Fourth

export const fourthAwait = async () => {
  const resp = await fetch('https://api.coingecko.com/api/v3/exchange_rates');
  const data = await resp.json();
  console.log('await-4', data.rates.eth);
};

export const thenFourth = () => {
  const data = fetch('https://api.coingecko.com/api/v3/exchange_rates')
    .then((data) => data.json())
    .then((resp) => {
      console.log('then-4', resp.rates.eth);
    });
};

//Fifth
export const fifthAwait = async () => {
  const resp = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await resp.json();
  console.log('await-5', data);
};

export const fifthThen = () => {
  const data = fetch('https://dog.ceo/api/breeds/image/random')
    .then((data) => data.json())
    .then((resp) => {
      console.log('fifthThen', resp);
    });
};

//   * TODO: write a fetch request to an API url using .then()
//  * THEN: writ ea fetch request using async/await
//  *
//  * MAKE SURE they ar eidentical
// console.log(.then)
// constole.log(async/await)
