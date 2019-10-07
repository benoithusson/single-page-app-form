import React from 'react';
import { Link } from 'react-router-dom';
import style from './home.module.scss';
import BlocTitle from '../../components/bloc-title/blocTitle.jsx';

const Home = () => {

    return (

        <React.Fragment>

            <BlocTitle className={style.blocTitle} title="Create Asset" />

            <div className={style.linkContainer}>

               <Link className={style.link} to="/assets-information-form"> 1. Assets Information</Link>

               <Link className={style.link} to="/advanced-form"> 2. Advanced Form</Link>

               <Link className={style.link} href="/advanced-form">3. Test Form</Link>

            </div>

        </React.Fragment>

    )
}

export default Home;
