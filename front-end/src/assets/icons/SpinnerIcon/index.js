import React  from 'react';
import styles from './styles.scss';

/* eslint-disable max-len */
const SpinnerIcon = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 100 100'
        preserveAspectRatio='xMidYMid'
        className={ styles.spinnerIcon }
    >
        <path
            // path length=256.589
            d='M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40 C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z'
            strokeDasharray='256'
        >
            <animate
                attributeName='stroke-dashoffset'
                calcMode='linear'
                values='0;513'
                keyTimes='0;1'
                dur='3'
                begin='0s'
                repeatCount='indefinite'
            />
        </path>
    </svg>
);
/* eslint-disable max-len */

export default SpinnerIcon;
