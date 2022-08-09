import React from 'react';
import styles from '../../styles/Blog.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Text } from 'rebass';
import EmptyState from '../EmptyState';
import { format } from 'date-fns';

const Card = ({ article }) => {
  !(article?.length > 0) && (
    <Text fontSize='1.5rem' fontWeight='bold' sx={{ color: 'red' }}>
      <EmptyState />
    </Text>
  );

  return (
    <div className={styles.blogCardWrapper}>
      <div className={styles.blogCardInner}>
        <Box width='100%' mb='2rem'>
          <Image
            src={article.attributes.image.data.attributes.url}
            width={680}
            height={520}
            alt={article.attributes.image.data.attributes.alternativeText || ''}
            objectFit='cover'
            style={{
              objectPosition: '50% 50%',
              borderRadius: '15px',
              maxHeight: 'unset !important',
            }}
          />
        </Box>
        <div className={styles.textContent}>
          <div className={styles.blogDetails}>
            <div className={styles.details}>
              <span className={styles.date}>
                <Image
                  src='https://res.cloudinary.com/nextgen-farms/image/upload/v1659989547/icons/calendar_xfdblg.svg'
                  width={15}
                  height={15}
                />
                &nbsp;{' '}
                {format(
                  new Date(article.attributes.publishedAt),
                  'MMMM dd yyyy',
                )}
              </span>
              <span className={styles.time}>
                <Image
                  src='https://res.cloudinary.com/nextgen-farms/image/upload/v1659989547/icons/clock_aptmxn.svg'
                  width={15}
                  height={15}
                />
                &nbsp;{article.attributes.duration} mins read
              </span>
            </div>
            <div className={styles.title}>
              <Link href={`/article/${article.attributes.slug}`}>
                <a className={styles.titleLink}>{article.attributes.title}</a>
              </Link>
            </div>
          </div>
          <div className={styles.mainContent}>
            <p>{article.attributes.excerpt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
