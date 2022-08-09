import React from 'react';
import { Text, Image, Flex } from 'rebass';
import NoData from '../images/no-data.png';

const EmptyState = () => {
  return (
    <Flex flexDirection='column' alignItems='center' justifyContent='center'>
      <Image
        alt='Empty State'
        maxWidth='42rem'
        mb='3rem'
        sx={{ objectFit: 'contain' }}
        src={NoData}
      />
      <Text textAlign='center'>Oops! We don't have any posts yet!</Text>
    </Flex>
  );
};

export default EmptyState;
