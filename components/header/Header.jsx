import React from 'react';
import styles from '../../styles/Header.module.css';

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.contentGroup}>
        <h1 className={styles.h1Text}>NextGen Farms Blog</h1>
        <p>Stories from our farm & garden!</p>
      </div>
    </div>
  );
};

export default Header;
