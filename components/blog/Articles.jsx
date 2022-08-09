import React from 'react';
import Card from './Card';
import Layout from '../Layout';
import { Flex, Box } from 'rebass';
import styles from '../../styles/Blog.module.css';

const BlogMain = ({ articles, categories }) => {
  const { data } = articles;
  return (
    <Layout categories={categories}>
      <div className='container'>
        <Flex
          flexDirection={['column', 'column', 'row']}
          flexWrap='wrap'
          width={['100%', null, null]}
        >
          <div className={styles.flexWrapper}>
            {data?.map((article) => (
              <Card article={article} />
            ))}
          </div>
        </Flex>
      </div>
    </Layout>
  );
};

export default BlogMain;
