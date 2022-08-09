import React from 'react';
import styles from '../../styles/Nav.module.css';
import Image from 'next/image';
import Logo from '../../images/nextgen-logo.png';

const Nav = () => {
  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <div className={styles.contentGroup}>
          <Image
            src='https://res.cloudinary.com/nextgen-farms/image/upload/v1660038885/android-chrome-512x512_qcycpc.png'
            layout='fixed'
            alt='Logo'
            placeholder='blur'
            blurDataURL='NextGen%20Farms'
            width={100}
            height={40}
          />
          <div className={styles.Button}>
            <a
              href='https://www.nextgenfarmsng.com/'
              target='_blank'
              rel='noreferrer noopener'
            >
              Our Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
