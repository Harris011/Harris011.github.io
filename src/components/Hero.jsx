import React from 'react';
import { 
    Box, 
    Button, 
    Flex,
    Heading,
    Icon,
    Image,
    Link,
    Text
} from '@chakra-ui/react';
import Haris from '../assets/Haris.JPG'
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import resume from '../assets/resume.pdf';

function Hero() {
    return ( 
        <Flex
            h={'100%'}
            w={'100%'}
            flexDir={{base:'column', sm:'column', md:'row', lg:'row', xl:'row'}}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Flex
                flex={'1'}
                justifyContent={'center'}
                align={'center'}
                position={'relative'}
            >
                <Box
                    position={'relative'}
                    borderRadius={'50%'}
                    overflow={'hidden'}
                    h={'310px'}
                    w={'310px'}
                    border={'1px'}
                    borderColor={'gray.300'}
                    shadow={'2xl'}
                >
                    <Image
                        src={Haris}
                        alt='Muhammad Harris Johanda'
                        objectFit={'cover'}
                        objectPosition={'center top'}
                        w={'100%'}
                        h={'100%'}
                        position={'absolute'}
                    />
                </Box>
            </Flex>
            <Flex
                flex={'1'}
                justifyContent={'center'}
                alignItems={'center'}
                flexDir={'column'}
                gap={'5'}
            >
                <Flex
                    flexDir={'column'}
                >
                    <Text
                        fontSize={'lg'}
                        color={'gray.600'}
                    >
                        Hello, I'm
                    </Text>
                    <Heading
                        fontSize={'3xl'}
                        fontWeight={'semibold'}
                    >
                        Harris Johanda
                    </Heading>
                    <Text
                        fontSize={'xl'}
                        color={'gray.600'}
                    >
                        Full-Stack Developer
                    </Text>
                </Flex>
                <Flex
                    flexDir={'row'}
                    gap={'5'}
                >
                    <Button
                        size={'sm'}
                        rounded={'xl'}
                        fontWeight={'normal'}
                        variant={'outline'}
                        borderColor={'gray.500'}
                        _hover={{'bg': 'gray.500', 'color': 'white', 'border': '1px', 'borderColor': 'gray.500'}}
                        onClick={() => window.open(resume, '_blank')}
                    >
                        Download CV
                    </Button>
                    <Button
                        size={'sm'}
                        rounded={'xl'}
                        fontWeight={'normal'}
                        variant={'outline'}
                        borderColor={'gray.500'}
                        _hover={{'bg': 'gray.500', 'color': 'white', 'border': '1px', 'borderColor': 'gray.500'}}
                    >
                        <Link
                            href='#contact'
                            _hover={{'textDecoration': 'none'}}
                        >
                            Contact Info
                        </Link>
                    </Button>
                </Flex>
                <Flex
                    gap={'5'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Link
                        href='https://www.linkedin.com/in/muhammad-harris-johanda-1414901ab'
                        isExternal
                    >
                        <Icon
                            as={BsLinkedin}
                            boxSize={'8'}
                        />
                    </Link>
                    <Link
                        href='https://github.com/Harris011'
                        isExternal
                    >
                        <Icon
                            as={BsGithub}
                            boxSize={'8'}
                        />
                    </Link>
                </Flex>
            </Flex>
        </Flex>
     );
}

export default Hero;