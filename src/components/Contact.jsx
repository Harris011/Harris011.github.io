import React from 'react';
import { 
    Flex, 
    Heading, 
    Icon, 
    Link, 
    Text 
} from '@chakra-ui/react';
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

function Contact() {
    return ( 
        <Flex
            h={'100%'}
            w={'100%'}
            justifyContent={'center'}
            flexDir={'column'}
            gap={'8'}
        >
            <Flex
                h={'10%'}
                w={'100%'}
                justifyContent={'center'}
                alignItems={'center'}
                py={{base:'6', sm:'6', md:'0', lg:'0', xl:'0'}}
            >
                <Heading
                    fontSize={'3xl'}
                    textDecorationLine={'underline'}
                    textUnderlineOffset={'0.5rem'}
                >
                    Get in Touch
                </Heading>
            </Flex>
            <Flex
                justifyContent={'center'}
                p={'4'}
                gap={'4'}
                h={'auto'}
            >
                <Flex
                    flexDir={{base:'column', sm:'column', md:'row', lg:'row', xl:'row'}}
                    justifyContent={'space-around'}
                    alignItems={'center'}
                    p={'8'}
                    gap={'8'}
                    border={'1px'}
                    rounded={'xl'}
                >
                    <Flex
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={'2'}
                        >
                        <Icon
                            as={AiOutlineMail}
                        />
                        <Text>
                            johandaharris@gmail.com
                        </Text>
                    </Flex>
                    <Flex
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={'2'}
                    >
                        <Icon
                            as={BsWhatsapp}
                        />
                        <Link
                            href='https://wa.me/6285277032949'
                            isExternal
                            textUnderlineOffset={'0.5rem'}
                        >
                            WhatsApp
                        </Link>
                    </Flex>
                    <Flex
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={'2'}
                    >
                        <Icon
                            as={BsLinkedin}
                        />
                        <Link
                            href='https://www.linkedin.com/in/muhammad-harris-johanda-1414901ab/'
                            isExternal
                            textUnderlineOffset={'0.5rem'}
                        >
                            Linkedin
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
            <Flex
                flexDir={{base:'column', sm:'column', md:'row', lg:'row', xl:'row'}}
                justifyContent={'space-evenly'}
                gap={'4'}
                my={'4'}
            >
                <Link
                    href='#navbar'
                    className='nav-link'
                    fontSize={'xl'}
                    _hover={{'color': 'gray.500', 'textDecoration':'underline'}}
                >
                    Home
                </Link>
                <Link
                    href='#about'
                    className='nav-link'
                    fontSize={'xl'}
                    _hover={{'color': 'gray.500', 'textDecoration':'underline'}}
                >
                    About
                </Link>
                <Link
                    href='#projects'
                    className='nav-link'
                    fontSize={'xl'}
                    _hover={{'color': 'gray.500', 'textDecoration':'underline'}}
                >
                    Projects
                </Link>
                <Link
                    href='#contact'
                    className='nav-link'
                    fontSize={'xl'}
                    _hover={{'color': 'gray.500', 'textDecoration':'underline'}}
                >
                    Contact
                </Link>
            </Flex>
        </Flex>
     );
}

export default Contact;