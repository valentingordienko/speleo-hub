import React from 'react';
import { GlobalContext } from '../../contexts/global'
import { AppName } from '../../components/apllName/AppName'
import './Main.css';

function Main() {
    return (
        <GlobalContext>
            <div className="main">
                <AppName/>
            </div>
        </GlobalContext>
    );
}

export default Main;
