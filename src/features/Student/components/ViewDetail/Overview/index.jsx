import React from 'react';
import './styles.scss'
import SelectDot from '../SelectDot';
import Divider from '@material-ui/core/Divider';

const Overview = ({ overview }) => {
    return (

        <div className="overview-content">
            <div className="overview-content__wrapper">
                <div className="overview-content__item">
                    <span>{overview}</span>
                </div>
            </div>
        </div>
    );
}

export default Overview;