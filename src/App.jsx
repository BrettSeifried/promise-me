import { useEffect } from 'react';
import {
  animeData,
  animeDataThen,
  fifthAwait,
  fifthThen,
  fourthAwait,
  pixelAwait,
  pixelAwaitThen,
  thenFourth,
  thenThird,
  thirdTry,
} from './services/promise-me';

export default function App() {
  useEffect(() => {
    // animeData();
    // animeDataThen();
    // pixelAwait();
    // pixelAwaitThen();
    // thirdTry();
    // thenThird();
    // fourthAwait();
    // thenFourth();
    fifthAwait();
    fifthThen();
  });
  // const awaitTest = animeData();
  // console.log('await', awaitTest);
  // const thenTest = animeDataThen();
  // console.log('then', thenTest);
  return <h1>Hello World</h1>;
}
