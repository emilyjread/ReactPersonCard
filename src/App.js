import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';
import Blocks from './components/Blocks';
import Header from'./components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Subcontent from './components/Subcontent';
import Advertisement from './components/Advertisement'

function App() {
  return (
    <div className="App">
     <div className="persons">
     <PersonCard firstName="Jane" lastName="Doe" age={45} hairColor="black"/>
     <PersonCard firstName="John" lastName="Smith" age={88} hairColor="brown"/>
     <PersonCard firstName="Millard" lastName="Fillmore" age={50} hairColor="brown"/>
     <PersonCard firstName="Maria" lastName="Smith" age={62} hairColor="brown"/>
     </div>

     <div>
       <Blocks>
          <Header/>
          <Navigation/>
          <Main>
            <Subcontent/>
            <Subcontent/>
            <Subcontent/>
            <Advertisement/>
          </Main>
       </Blocks>
     </div>
    </div>
  );
}

export default App;
