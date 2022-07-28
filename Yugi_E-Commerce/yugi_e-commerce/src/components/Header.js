import React from 'react';
import Container from './layout/Container';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import logo from '../img/Favicon.png';

const Header = () => {
    return(
    <nav className={styles.navbar}> 
        <Container>
            <h3>
                <img src={logo} alts="logo"/>
                Yugi E-Commerce
            </h3>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/">
                        <span color="primary">Home</span>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link to="/contato">
                        <span color="primary">Contato</span>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Cart />
                </li>
            </ul>   
        </Container>
    </nav>
    )
}

export default Header;
