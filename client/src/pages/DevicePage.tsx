import React, { FC } from 'react';
import Header from '../components/Header/Header';
import MainDevicePage from '../components/DevicePage/MainDevicePage';
import Footer from '../components/Footer/Footer';

const DevicePage: FC = () => {

    return (
        <div>
            <Header/>
            <MainDevicePage/>
            <Footer/>
        </div>
    );
};

export default DevicePage;