import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom'
import { routes } from '../../routes/routes';
import ModalRegistration from '../Modal/ModalRegistration/ModalRegistration';
import ModalSucces from '../Modal/ModalSucces/ModalSucces';
import ModalLogin from '../Modal/ModalLogin/ModalLogin';

const AppRouter: FC = () => {
    return (
        <>
            <Routes>
                {
                    routes.map(item => {
                        return <Route key={item.path} path={item.path} element={item.component} />
                    })
                }
            </Routes>
            <ModalRegistration/>
            <ModalSucces/>
            <ModalLogin/>
        </>
    );
};

export default AppRouter;