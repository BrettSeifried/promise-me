import { useEffect } from 'react';
import { animeData, animeDataThen } from './services/promise-me';

export default function App() {
  useEffect(() => {
    animeData();
    animeDataThen();
  });
  // const awaitTest = animeData();
  // console.log('await', awaitTest);
  // const thenTest = animeDataThen();
  // console.log('then', thenTest);
  return <h1>Hello World</h1>;
}
