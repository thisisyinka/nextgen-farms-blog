import React from 'react';
import { Box, Text, Flex } from 'rebass';

const Footer = () => {
  const now = new Date();
  let currentYear = now.getFullYear();

  return (
    <>
      <Flex sx={{ borderTop: '1px solid #077e00' }}>
        <div className='container'>
          <Box p={3} fontSize={3} width='100%'>
            <Flex justifyContent='center' alignItems='center'>
              <Text fontWeight='bold'>
                &copy; Copyright {currentYear}. Simple Blog - by Layinka 👩🏾‍💻
              </Text>
            </Flex>
          </Box>
        </div>
      </Flex>
    </>
  );
};

export default Footer;
