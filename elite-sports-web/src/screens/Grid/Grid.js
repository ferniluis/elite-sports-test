import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";
import { getFetchUrl } from "../../factories/index";
import "./Grid.css";

function Grid() {
    const [charactersList, setCharactersList] = useState([]);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        async function getData() {
            const response = await fetch(getFetchUrl());
            const responseData = await response.json();
            setCharactersList(responseData.results);
        }
        getData();

    }, []);

    const onThemeChange = (event) => {
        setDarkMode(event.target.checked);
    }

    return <div className={ darkMode ? 'body' : ''}>
        <nav className={'nav-bar'}>
            <div>
                <ToggleSwitch label="DarkMode" change={onThemeChange} />
            </div>
        </nav >
        <div className={'cards-container'}>
            {charactersList && charactersList.map(x => <Card character={x} key={x.id} dark={darkMode} />)}
        </div>
    </div >;
}

export default Grid;