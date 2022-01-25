export async function animeData() {
  const resp = await fetch('https://api.jikan.moe/v4/anime?q=kuroko&sfw');
  const data = await resp.json();
  console.log('await', data);
  return data;
}

export const animeDataThen = () => {
  const data = fetch('https://api.jikan.moe/v4/anime?q=kuroko&sfw')
    .then((data) => data.json())
    .then((response) => {
      console.log('then', response);
    });
  return response;
};

/**
 * TODO: write a fetch request to an API url using .then()
 * THEN: writ ea fetch request using async/await
 *
 * MAKE SURE they ar eidentical
 */
// console.log(.then)
// constole.log(async/await)

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */
