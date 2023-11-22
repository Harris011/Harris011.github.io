import React from 'react';
import {
    Flex,
    Heading,
    Icon,
    Text
} from '@chakra-ui/react';
import { GoDotFill } from 'react-icons/go';

function Skills() {
    return ( 
        <Flex
            h={'100%'}
            w={'100%'}
            justifyContent={'center'}
            flexDir={'column'}
        >
            <Flex
                h={'10%'}
                w={'100%'}
                justifyContent={'center'}
                alignItems={'center'}
                py={{base:'5', sm:'5', md:'0', lg:'0', xl:'0'}}
            >
                <Heading
                    fontSize={'3xl'}
                    textDecorationLine={'underline'}
                    textUnderlineOffset={'0.5rem'}
                >
                    Explore My Skills
                </Heading>
            </Flex>
            <Flex
                h={'auto'}
                w={'100%'}
                flexDir={{base:'column', sm:'column', md:'row', lg:'row', xl:'row'}}
                justifyContent={'space-evenly'}
                p={'10'}
                gap={'4'}
            >
                <Flex
                    flex={'1'}
                    flexDir={'column'}
                    gap={'6'}
                    py={'4'}
                    border={'1px'}
                    rounded={'xl'}
                    shadow={'xl'}
                >
                    <Text
                        fontSize={'lg'}
                        fontWeight={'semibold'}
                    >
                        Frontend Development
                    </Text>
                    <Flex
                        flexDir={{base:'column', sm:'column', md:'row', lg:'row', xl:'row'}}
                        flexWrap={'wrap'}
                        p={'1'}
                        justifyContent={'space-between'}
                        alignItems={'flex-start'}
                        gap={'6'}
                        w={{base:'50%', sm:'50%', md:'auto', lg:'auto', xl:'auto'}}
                        mx={{base:'auto', sm:'auto', md:'0', lg:'0', xl:'0'}}
                    >
                        <Flex
                            flexBasis={{ base: '100%', md: '45%' }}
                            justifyContent={'start'}
                            alignItems={'center'}
                            gap={'2'}
                        >
                            <Icon
                                as={GoDotFill}
                            />
                            <Text>
                                HTML5
                            </Text>
                        </Flex>
                        <Flex
                            flexBasis={{ base: '100%', md: '45%' }}
                            justifyContent={'start'}
                            alignItems={'center'}
                            gap={'2'}
                        >
                            <Icon
                                as={GoDotFill}
                            />
                            <Text>
                                CSS
                            </Text>
                        </Flex>
                        <Flex
                            flexBasis={{ base: '100%', md: '45%' }}
                            justifyContent={'start'}
                            alignItems={'center'}
                            gap={'2'}
                        >
                            <Icon
                                as={GoDotFill}
                            />
                            <Text>
                                Javascript
                            </Text>
                        </Flex>
                        <Flex
                            flexBasis={{ base: '100%', md: '45%' }}
                            justifyContent={'start'}
                            alignItems={'center'}
                            gap={'2'}
                        >
                            <Icon
                                as={GoDotFill}
                            />
                            <Text>
                                React
                            </Text>
                        </Flex>
                        <Flex
                            flexBasis={{ base: '100%', md: '45%' }}
                            justifyContent={'start'}
                            alignItems={'center'}
                            gap={'2'}
                        >
                            <Icon
                                as={GoDotFill}
                            />
                            <Text
                                whiteSpace={'nowrap'}
                            >
                                Taillwind CSS
                            </Text>
                        </Flex>
                        <Flex
                            flexBasis={{ base: '100%', md: '45%' }}
                            justifyContent={'start'}
                            alignItems={'center'}
                            gap={'2'}
                        >
                            <Icon
                                as={GoDotFill}
                            />
                            <Text
                                whiteSpace={'nowrap'}
                            >
                                Chakra UI
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex
                    flex={'1'}
                    flexDir={'column'}
                    gap={'6'}
                    py={'4'}
                    border={'1px'}
                    rounded={'xl'}
                    shadow={'xl'}
                >
                    <Text
                        fontSize={'lg'}
                        fontWeight={'semibold'}
                    >
                        Backend Development
                    </Text>
                    <Flex
                        flexDir={{base:'column', sm:'column', md:'row', lg:'row', xl:'row'}}
                        flexWrap={'wrap'}
                        p={'1'}
                        justifyContent={'space-between'}
                        alignItems={'flex-start'}
                        gap={'6'}
                        w={{base:'50%', sm:'50%', md:'auto', lg:'auto', xl:'auto'}}
                        mx={{base:'auto', sm:'auto', md:'0', lg:'0', xl:'0'}}
                    >
                        <Flex
                            flexBasis={{ base: '100%', md: '45%' }}
                            justifyContent={'start'}
                            alignItems={'center'}
                            gap={'2'}
                        >
                            <Icon
                                as={GoDotFill}
                            />
                            <Text>
                                Node.js
                            </Text>
                        </Flex>
                        <Flex
                            flexBasis={{ base: '100%', md: '45%' }}
                            justifyContent={'start'}
                            alignItems={'center'}
                            gap={'2'}
                        >
                            <Icon
                                as={GoDotFill}
                            />
                            <Text>
                                Express
                            </Text>
                        </Flex>
                        <Flex
                            flexBasis={{ base: '100%', md: '45%' }}
                            justifyContent={'start'}
                            alignItems={'center'}
                            gap={'2'}
                        >
                            <Icon
                                as={GoDotFill}
                            />
                            <Text>
                                MySQL
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex
                    flex={'1'}
                    flexDir={'column'}
                    gap={'6'}
                    py={'4'}
                    border={'1px'}
                    rounded={'xl'}
                    shadow={'xl'}
                >
                    <Text
                        fontSize={'lg'}
                        fontWeight={'semibold'}
                    >
                        Other
                    </Text>
                    <Flex
                        flexDir={{base:'column', sm:'column', md:'row', lg:'row', xl:'row'}}
                        flexWrap={'wrap'}
                        p={'1'}
                        justifyContent={'space-between'}
                        alignItems={'flex-start'}
                        gap={'6'}
                        w={{base:'50%', sm:'50%', md:'auto', lg:'auto', xl:'auto'}}
                        mx={{base:'auto', sm:'auto', md:'0', lg:'0', xl:'0'}}
                    >
                        <Flex
                            flexBasis={{ base: '100%', md: '45%' }}
                            justifyContent={'start'}
                            alignItems={'center'}
                            gap={'2'}
                        >
                            <Icon
                                as={GoDotFill}
                            />
                            <Text>
                                AutoCad
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
     );
}

export default Skills;