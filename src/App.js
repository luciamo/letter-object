import { useEffect, useState } from 'react';
import Letter from './Letter';

function App() {
  const [data, setData] = useState();
  const [isDataReady, setIsDataReady] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const myLetter = new Letter();
        const LetterObject = await myLetter.get();
        setData(LetterObject);
      } catch (e) {
        setData("There were something wrong with the fetch")
      }
      setIsDataReady(true);
    }
    getData();
  }, [])

  return (
    <div className="App">
      <p>Open the browser console to see the expected output</p>
      {isDataReady && console.log(data)}
    </div>
  );
}

export default App;
