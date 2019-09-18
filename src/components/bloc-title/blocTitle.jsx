import React from 'react';
import style from './blocTitle.module.scss';
// import styled, { keyframes } from 'styled-components';

const BlocTitle = (props) => {

    const { title } = props;

    return (
        <React.Fragment>

                <div className={style.mainContainer}>

                    <div className={style.containerTitle}>
                        <h2 className={style.title}>{title}</h2>
                    </div>

                    <div className={style.containerButton}>
                        <button className={style.button}>X</button>
                    </div>

                </div>
            
        </React.Fragment>
    )
}

export default BlocTitle;
