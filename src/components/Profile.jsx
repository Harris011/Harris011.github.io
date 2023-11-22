import React from 'react';
import { 
    Flex,
    Heading,
    Text
} from '@chakra-ui/react';

function Profile() {
    return ( 
        <Flex
            h={'100%'}
            w={'100%'}
            justifyContent={'center'}
            flexDir={'column'}
            gap={'6'}
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
                    Get To Know More
                </Heading>
            </Flex>
            <Flex
                h={'auto'}
                w={'100%'}
                flexDir={{base:'column', sm:'column', md:'row', lg:'row', xl:'row'}}
                justifyContent={'space-evenly'}
                p={'2'}
                gap={'4'}
            >
                <Flex
                    flex={'1'}
                    flexDir={'column'}
                    gap={'5'}
                    py={'2'}
                    border={'1px'}
                    rounded={'xl'}
                    px={'2'}
                    shadow={'xl'}
                >
                    <Text
                        fontSize={'lg'}
                        fontWeight={'semibold'}
                    >
                        About Me
                    </Text>
                    <Flex
                        justifyContent={'start'}
                        alignItems={'center'}
                    >
                        <Text
                            textAlign={'justify'}
                            fontSize={'md'}
                            fontWeight={'light'}
                        >
                            I am a motivated individual with a background in electrical engineering and have completed a full stack web development program. 
                            Carrying a combination of skills, including a strong foundation in engineering principles and proficiency in both front-end and back-end development, 
                            I am driven by enthusiasm to apply my creativity and technical proficiency to craft dynamic web applications that enhance user experiences. 
                            With a problem-solving mindset, attention to detail, and proficiency in HTML, CSS, JavaScript, React.js, Express, and Node.js, 
                            I am eager to leverage this diverse skill set as a full stack web developer with the goal of making a meaningful impact on projects.
                        </Text>
                    </Flex>
                </Flex>
                <Flex
                    flex={'1'}
                    flexDir={'column'}
                    gap={'5'}
                    py={'2'}
                    border={'1px'}
                    rounded={'xl'}
                    px={'2'}
                    shadow={'xl'}
                >
                    <Text
                        fontSize={'lg'}
                        fontWeight={'semibold'}
                    >
                        Details
                    </Text>
                    <Flex
                        flexDir={'column'}
                        justifyContent={'center'}
                        alignItems={'start'}
                        gap={'4'}
                    >
                        <Flex
                            flexDir={'column'}
                            gap={'1'}
                            justifyContent={'start'}
                            alignItems={'start'}
                        >
                            <Text
                                fontWeight={'semibold'}
                                textAlign={'start'}
                            >
                                Name :
                            </Text>
                            <Text
                                fontWeight={'medium'}
                                whiteSpace={'break-spaces'}
                                textAlign={'start'}
                            >
                                Muhammad Harris Johanda
                            </Text>
                        </Flex>
                        <Flex
                            flexDir={'column'}
                            gap={'1'}
                            justify={'start'}
                            alignItems={'start'}
                        >
                            <Text
                                fontWeight={'semibold'}
                            >
                                Education :
                            </Text>
                            <Flex
                                flexDir={'column'}
                                justifyContent={'center'}
                                alignItems={'start'}
                            >
                                <Text
                                    fontWeight={'medium'}
                                    letterSpacing={'tight'}
                                    whiteSpace={'break-spaces'}
                                    textAlign={'start'}
                                >
                                    Purwadhika Digital Technology School, Jakarta
                                </Text>
                                <Text
                                    fontSize={'md'}
                                    fontWeight={'light'}
                                    whiteSpace={'break-spaces'}
                                    textAlign={'start'}
                                >
                                    Full-Stack Web Development
                                </Text>
                                <Text
                                    fontSize={'md'}
                                    fontWeight={'light'}
                                    whiteSpace={'break-spaces'}
                                    textAlign={'start'}
                                >
                                    (November 2022 – May 2023)
                                </Text>
                            </Flex>
                            <Flex
                                flexDir={'column'}
                                justifyContent={'center'}
                                alignItems={'start'}
                            >
                                <Text
                                    fontWeight={'medium'}
                                    letterSpacing={'tight'}
                                    whiteSpace={'break-spaces'}
                                    textAlign={'start'}
                                >
                                    University of North Sumatera, Medan
                                </Text>
                                <Text
                                    fontSize={'md'}
                                    fontWeight={'light'}
                                    whiteSpace={'break-spaces'}
                                    textAlign={'start'}
                                >
                                    Bachelor of Electrical Engineering
                                </Text>
                                <Text
                                    fontSize={'md'}
                                    fontWeight={'light'}
                                    whiteSpace={'break-spaces'}
                                    textAlign={'start'}
                                >
                                    (2011 - 2017)
                                </Text>
                            </Flex>
                        </Flex>
                        <Flex
                            flexDir={'column'}
                            gap={'1'}
                            justifyContent={'center'}
                            alignItems={'start'}
                        >
                            <Text
                                fontWeight={'semibold'}
                            >
                                Location :
                            </Text>
                            <Text
                                whiteSpace={'break-spaces'}
                                textAlign={'start'}
                            >
                                Jakarta, Indonesia
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
     );
}

export default Profile;