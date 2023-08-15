import React, { FC } from 'react';
import Header from '../components/Header/Header';
import MainBrand from '../components/BrandPage/MainBrand';
import Footer from '../components/Footer/Footer';

const BrandInfoPage: FC = () => {
    return (
        <div className='brand-page'>
            <Header/>
            <MainBrand/>
            <Footer/>
        </div>
    );
};

export default BrandInfoPage;