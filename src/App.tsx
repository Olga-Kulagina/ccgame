import React, {ChangeEvent, useState} from 'react';
import './App.css';
import 'antd/dist/antd.css'
import {randomCountry} from './components/CountryCapital'
import {Button, Input} from 'antd';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

function App() {

    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [country, setCountry] = useState<{name: string, capital: string}>(randomCountry);
    const [userAnswer, setUserAnswer] = useState<string>('');
    const [right, setRight] = useState<boolean>(false);

    const onCheckClick = () => {
        if (userAnswer === country.capital) {
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
                Столица {country.name}?
            </div>
            <div>
                <Input value={userAnswer} onChange={onInputChange}></Input>
            </div>
            <div>
                <Button onClick={onCheckClick}>Check</Button>
            </div>
            {isChecked ?
                <div>
                    {right ? 'Правильно!' : 'Неверно!'} Ответ: {country.capital}
                    <Button onClick={onNextClick}>Next</Button>
                </div>
                : ''
            }
            <div className={'mapContainer'}>
                <MapContainer className={'map'} center={[51.505, -0.09]} zoom={5} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC'
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                            A pretty CSS3 popup. <br/> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>

        </div>
    );
}

export default App;
