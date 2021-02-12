import React, {ChangeEvent, useState} from 'react';
import './App.css';
import 'antd/dist/antd.css'
import {randomCountry} from './components/CountryCapital'
import {Button, Input} from 'antd';

function App() {

    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [country, setCountry] = useState<Array<string>>(randomCountry);
    const [userAnswer, setUserAnswer] = useState<string>('');
    const [right, setRight] = useState<boolean>(false);

    const onCheckClick = () => {
        if(userAnswer === country[1]) {
            setRight(true)
        } else {
            setRight(false)
        }
        setIsChecked(true)
    }

    const onNextClick = () => {
        setIsChecked(false)
        setCountry(randomCountry())
    }

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(e.currentTarget.value)
    }

    return (
        <div>
            <div>
                Столица {country[0]}?
            </div>
            <div>
                <Input value={userAnswer} onChange={onInputChange}></Input>
            </div>
            <div>
                <Button onClick={onCheckClick}>Check</Button>
            </div>
            {isChecked ?
                <div>
                    {right ? 'Правильно!' : 'Неверно!'} Ответ: {country[1]}
                    <Button onClick={onNextClick}>Next</Button>
                </div>
                : ''
            }
        </div>
    );
}

export default App;
