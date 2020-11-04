import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import {Answer} from './components/Answer/Answer';
import {Question} from './components/Question/Question';
import {randomCountry} from '../src/components/CountryCapital'

function App() {

    let country = randomCountry()

    return (
        <div className="App">
            <Question country={country[0]}/>
            <Answer capital={country[1]}/>
        </div>
    );
}

export default App;
