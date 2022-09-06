import React from 'react';
import { Text } from 'rebass';
import styles from '../../styles/Nav.module.css';

const Nav = () => {
  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <div className={styles.contentGroup}>
          <Text
            fontSize={[3, null, 5]}
            fontWeight='bold'
            color='#077e00'
            sx={{ textTransform: 'uppercase' }}
          >
            Blog
          </Text>
          <div className={styles.Button}>
            <a href='#' target='_blank' rel='noreferrer noopener'>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
