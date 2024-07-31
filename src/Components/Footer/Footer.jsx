import React from 'react';
import Newsletter from '../Newsletter/Newsletter';
import { Box } from '@chakra-ui/react';
import Social from '../SocialMedia/Social';

const Footer = () => {
    return (
        <Box as='footer'>
            <Newsletter></Newsletter>
            <Social></Social>
        </Box>
        
    );
}

export default Footer;
