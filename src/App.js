
import { useState } from 'react';
import './App.css';
import Question from './Question'
import data from './data'

function App() {

  let [mbti] = useState(data)

  return (
    <div className="App">
       
        <Question mbti = {mbti}/>
    </div>
  );
}

export default App;
