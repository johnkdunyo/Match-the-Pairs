import { 
    Box, 
    Button, 
    Container, 
    IconButton, 
    useColorMode, 
    useColorModeValue 
} from '@chakra-ui/react'
import React from 'react';
import { LightBulbIcon } from '../styles/icons'
import { MoonIcon } from '@chakra-ui/icons';

const Header = () => {
    const bgColor = useColorModeValue('white', 'gray.800');

    const { toggleColorMode } = useColorMode();
    const themeIcon = useColorModeValue(<MoonIcon />, <LightBulbIcon />);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  return (
    <Box position="fixed" w="100%" zIndex={1} backgroundColor={bgColor}>
        <Container 
            maxW="xl"
            py={3}
            display="flex"
            justifyContent="space-between"
            alignItems="center" 
        >
            <Button variant="ghost" fontSize="xl" onClick={scrollToTop}>
                Welcome
            </Button>
            <Box>
                <IconButton
                    ml={1}
                    onClick={toggleColorMode}
                    variant="ghost"
                    aria-label="Toggle theme"
                    icon={themeIcon}
                />
            </Box>
        </Container>
    </Box>
  )
}

export default Header