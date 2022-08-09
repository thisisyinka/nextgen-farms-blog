import React from 'react';
import ReactMarkdown from 'react-markdown';
import { getAPI } from '../../lib/api';
import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Heading, Text } from 'rebass';
import LeftArrow from '../../images/left-arrow.svg';
import Nav from '../../components/nav';
import { format } from 'date-fns';
import Footer from '../../components/footer/Footer';

const Article = ({ article }) => {
  // const getCategoryName = () => {
  //   categories.data.map((category) => category.attributes.name);
  // };
  return (
    <>
      <Nav />
      <Box pt='8rem'>
        <div className='container'>
          <Flex
            mb={['3rem', null, '5rem']}
            flexDirection={['column', null, 'row']}
          >
            <Box
              mb={['1.7rem', null, 0]}
              mr={[0, null, '2rem']}
              flexShrink='0'
              sx={{ cursor: 'pointer' }}
            >
              {/* <LeftArrow /> */}
              <Link href='/'>
                <a>
                  <Image
                    src='https://res.cloudinary.com/nextgen-farms/image/upload/v1659996063/icons/left-arrow_r0pkvi.svg'
                    width={35}
                    height={35}
                  />
                </a>
              </Link>
            </Box>
            <Box flex={1}>
              <Flex
                alignItems='center'
                flexWrap='wrap'
                mb='3rem'
                fontSize='1.2rem'
              >
                <Text variant='body'>
                  By {article.attributes.author.data.attributes.name}
                </Text>
                {console.log(article.attributes)}
                <Box width='1px' height='2rem' mx='1.5rem' bg='#000' />

                <Text
                  color='#077e00'
                  sx={{
                    textDecoration: 'none',
                    '&:visited': { color: '#077e00' },
                  }}
                >
                  {article.attributes.category.data.attributes.name}
                </Text>

                <Box
                  width='6px'
                  height='6px'
                  sx={{ borderRadius: '50%' }}
                  mx='1rem'
                  bg='#000'
                />

                <Text variant='body' opacity='0.4'>
                  {format(
                    new Date(article.attributes.publishedAt),
                    'MMM dd, yyyy',
                  )}
                </Text>
              </Flex>
              <Heading mb='1rem' fontSize={[5, 6, 7]} fontFamily='inherit'>
                {article.attributes.title}
              </Heading>
            </Box>
          </Flex>
          <Box width='100%'>
            <Image
              objectFit='cover'
              src={article.attributes.image.data.attributes.url}
              width={article.attributes.image.data.attributes.width || '100%'}
              height={article.attributes.image.data.attributes.height || '100%'}
              style={{ maxWidth: '1200px' }}
            />
          </Box>
          <Flex
            flexDirection={['column', null, null, 'column']}
            my={['3rem', null, '5rem']}
            fontSize={[2, 2, 3]}
            sx={{ position: 'relative' }}
          >
            <ReactMarkdown children={article.attributes.content} />
            {/* {article.attributes.content} */}
          </Flex>
        </div>
      </Box>
      <Footer />
    </>
  );
};

export default Article;

export async function getStaticPaths() {
  const { data } = await getAPI('/articles');
  console.log('articles data', data);
  // console.log(
  //   'attributes data map attr',
  //   data.data.map((dt) => dt.attributes),
  // );
  if (!data) {
    return {
      notFound: true,
    };
  }
  const paths = data.data.map((article) => ({
    params: { slug: String(article.attributes.slug) },
  }));
  return {
    paths,
    fallback: false,
  };
}

// export async function getStaticPaths() {
//   const { data } = await getAPI('/articles?fields["slug"]');
//   console.log('articles data', data);
//   console.log(
//     'attributes data map attr',
//     data.data.map((dt) => dt.attributes),
//   );
//   const paths = data?.data?.map((article) => ({
//     params: { slug: String(article.attributes.slug) },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// }
//   const articlesResponse = await getAPI('/articles?filters[slug]');
//   console.log('articles data', articlesResponse);
//   const paths = articlesResponse?.map((article) => ({
//     params: { slug: String(article.attributes.slug) },
//   }));
//   return {
//     paths,
//     fallback: false,
//   }};

export async function getStaticProps({ params }) {
  const { data } = await getAPI(
    `/articles?filters[slug]=${params.slug}&populate=*`,
  );
  console.log('props', data.data);
  if (!data) {
    return {
      notFound: true,
    };
  }
  // const categoriesResponse = await getAPI('/categories');

  return {
    props: {
      article: data.data[0],
      // categories: categoriesResponse.data,
    },
    revalidate: 1,
  };
}
