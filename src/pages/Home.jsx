import React from 'react';
import { 
    Box,
    Flex,
    Text
} from '@chakra-ui/react';
import Hero from '../components/Hero';
import Profile from '../components/Profile';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

function Home() {
    return ( 
        <Flex
            h={'100%'}
            w={'100%'}
            mx={'auto'}
            flexDir={'column'}
        >
            <Box
                h={'88vh'}
                w={'100%'}
                px={{base:'0', sm:'0', md:'20', lg:'20'}}
                id='home'
            >
                <Hero/>
            </Box>
            <Box
                h={{base: 'fit-content', sm: 'fit-content', md:'100vh', lg:'100vh'}}
                w={'100%'}
                id='about'
                px={{base:'0', sm:'0', md:'20', lg:'20'}}
            >
                <Profile/>
            </Box>
            <Box
                h={{base: 'fit-content', sm: 'fit-content', md:'100vh', lg:'100vh'}}
                w={'100%'}
            >
                <Skills/>
            </Box>
            <Box
                h={{base: 'fit-content', sm: 'fit-content', md:'100vh', lg:'100vh'}}
                w={'100%'}
                id='projects'
            >
                <Projects/>
            </Box>
            <Box
                h={{base: 'fit-content', sm: 'fit-content', md:'50vh', lg:'50vh'}}
                w={'100%'}
                id='contact'
            >
                <Contact/>
            </Box>
            <Box
                h={'fit-content'}
                w={'100%'}
                py={'4'}
            >
                <Text>
                    Copyright © 2023 Created by Harris Johanda.
                </Text>
            </Box>
        </Flex>
     );
}

export default Home;