import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Blog.module.css';
import { Flex } from 'rebass';

const Nav = ({ categories }) => {
  const { data } = categories;
  return (
    <div className={styles.blogNav}>
      <div className='container'>
        {/* <div className={styles.eachCategory}> */}
        <Flex
          flexDirection={['column', null, 'row']}
          justifyContent='center'
          alignItems='center'
        >
          {data &&
            data?.map((category) => {
              return (
                <Link
                  href={`/categories/${category.attributes.slug}`}
                  key={category.id}
                >
                  <a className={styles.categoryLink}>
                    {category.attributes.name}
                  </a>
                </Link>
              );
            })}
        </Flex>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Nav;
