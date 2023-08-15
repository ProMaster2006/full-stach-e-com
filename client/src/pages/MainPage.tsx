import React, { FC } from 'react';
import CollectionsBlock from '../components/MainPage/CollectionsBlock/CollectionsBlock';
import Header from '../components/Header/Header';
import ImpotantBlock from '../components/MainPage/ImportantBlock/ImpotantBlock';
import Main from '../components/MainPage/Main/Main';
import TeamBlock from '../components/MainPage/TeamBlock/TeamBlock';
import Footer from '../components/Footer/Footer';

const MainPage: FC = () => {
    return (
        <div className='main-page'>
            <Header/>
            <Main/>
            <CollectionsBlock/>
            <ImpotantBlock/>
            <TeamBlock/>
            <Footer/>
        </div>
    );
};

export default MainPage;