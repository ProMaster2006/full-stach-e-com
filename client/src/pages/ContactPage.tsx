import React, { FC } from 'react';
import Header from '../components/Header/Header';
import MainContact from '../components/ContactPage/MainContact';
import Footer from '../components/Footer/Footer';

const ContactPage: FC = () => {
    return (
        <div className='contact-page page-contant'>
            <Header/>
            <MainContact/>
            <Footer/>
        </div>
    );
};

export default ContactPage;