import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
     <PersonCard firstname="Jane" lastname="Doe" age={45} haircolor="black"></PersonCard>
     <PersonCard firstname="John" lastname="Smith" age={88} haircolor="brown"></PersonCard>
     <PersonCard firstname="Millard" lastname="Fillmore" age={50} haircolor="brown"></PersonCard>
     <PersonCard firstname="Maria" lastname="Smith" age={62} haircolor="brown"></PersonCard>
    </div>
  );
}

export default App;
