import React, { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './MyButton.scss'

interface IMyButton {
    children: ReactNode
}

const MyButton: FC<IMyButton> = ({children}) => {
    return (
        <div className='my-button'>
            <Link to='/shop'>
                {children}
            </Link>
        </div>
    );
};

export default MyButton;