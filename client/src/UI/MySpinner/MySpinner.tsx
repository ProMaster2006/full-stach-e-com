import React, {FC} from 'react';
import './MySpinner.scss';

const MySpinner: FC = () => {
    return (
        <div className='container'>
            <div className="spinner"></div>
        </div>
    );
};

export default MySpinner;