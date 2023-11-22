import React from 'react';
import Slider from 'react-slick';
import { 
    Card,
    CardBody,
    Flex,
    Text,
    Box,
    Image,
    Heading,
    Divider,
    CardFooter,
    Button,
    Link
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cc_login from '../assets/cc/cc_login.png';
import cc_admin from '../assets/cc/cc_admin.png';
import cc_cashier_order from '../assets/cc/cc_cashier_order.png';
import ts_dst_task from '../assets/tsm/ts_dst_task.png';
import ts_dst_light from '../assets/tsm/ts_dst_light.png';

function Projects() {
    const navigate = useNavigate();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    }

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
                    Browse My Recent Projects
                </Heading>
            </Flex>
            <Flex
                h={'auto'}
                w={'100%'}
                flexDir={{base:'column', sm:'column', md:'row', lg:'row', xl:'row'}}
                justifyContent={'space-evenly'}
                p={'8'}
                gap={'4'}
            >
                <Flex
                    flex={'1'}
                    flexDir={'column'}
                >
                    <Card   
                        size={'sm'}
                        rounded={'xl'}
                        shadow={'xl'}
                        border={'1px'}
                        borderColor={'gray.200'}
                    >
                        <CardBody>
                            <Flex
                                flex={'1'}
                                mx={'1'}
                                justifyContent={'center'}
                                alignItems={'center'}
                                flexDir={'column'}
                                order={{base:'1', sm:'1', md:'2', lg:'2', xl:'2'}}
                                py={'4'}
                            >
                                <Box
                                    h={{base:'100%', sm:'100%', md:'200px', lg:'200px', xl:'200px'}}
                                    w={{base:'100%', sm:'100%', md:'350px', lg:'350px', xl:'400px'}}
                                >
                                    <Slider
                                        {...settings}
                                    >
                                        <Box
                                            h={'100%'}
                                            w={'100%'}
                                        >
                                            <Image
                                                src={ts_dst_task}
                                                h={'100%'}
                                                w={'100%'}
                                            />
                                        </Box>
                                        <Box
                                            h={'100%'}
                                            w={'100%'}
                                        >
                                            <Image
                                                src={ts_dst_light}
                                                h={'100%'}
                                                w={'100%'}
                                            />
                                        </Box>
                                    </Slider>
                                </Box>
                            </Flex>
                            <Flex
                                flexDir={'column'}
                                my={'6'}
                            >
                                <Text
                                    fontSize={'xl'}
                                    fontWeight={'semibold'}
                                >
                                    Task Smith
                                </Text>
                            </Flex>
                        </CardBody>
                        <Divider
                            w={'90%'}
                            alignSelf={'center'}
                        />
                        <CardFooter>
                            <Flex
                                h={'100%'}
                                w={'100%'}
                                justifyContent={'center'}
                                alignItems={'center'}
                                gap={'10'}
                                p={'1'}
                            >
                                <Link
                                    href='https://github.com/Harris011/tasks-management-app'
                                    isExternal
                                >
                                    <Button
                                        rounded={'lg'}
                                        size={'sm'}
                                        fontSize={'md'}
                                        fontWeight={'normal'}
                                        variant={'outline'}
                                        borderColor={'gray.500'}
                                        _hover={{'bg': 'gray.500', 'color': 'white', 'border': '1px', 'borderColor': 'gray.500'}}
                                    >
                                        Github
                                    </Button>
                                </Link>
                                <Button
                                    rounded={'lg'}
                                    size={'sm'}
                                    fontSize={'md'}
                                    fontWeight={'normal'}
                                    variant={'outline'}
                                    borderColor={'gray.500'}
                                    _hover={{'bg': 'gray.500', 'color': 'white', 'border': '1px', 'borderColor': 'gray.500'}}
                                    onClick={()=> navigate('/tasksmanagement', {replace: true})}
                                >
                                    Detail
                                </Button>
                            </Flex>
                        </CardFooter>
                    </Card>
                </Flex>
                <Flex
                    flex={'1'}
                    flexDir={'column'}
                >
                    <Card   
                        size={'sm'}
                        rounded={'xl'}
                        shadow={'xl'}
                        border={'1px'}
                        borderColor={'gray.200'}
                    >
                        <CardBody>
                            <Flex
                                flex={'1'}
                                mx={'1'}
                                justifyContent={'center'}
                                alignItems={'center'}
                                flexDir={'column'}
                                order={{base:'1', sm:'1', md:'2', lg:'2', xl:'2'}}
                                py={'4'}
                            >
                                <Box
                                    h={{base:'100%', sm:'100%', md:'200px', lg:'200px', xl:'200px'}}
                                    w={{base:'100%', sm:'100%', md:'350px', lg:'350px', xl:'400px'}}
                                >
                                    <Slider
                                        {...settings}
                                    >
                                        <Box
                                            h={'100%'}
                                            w={'100%'}
                                        >
                                            <Image
                                                src={cc_login}
                                                h={'100%'}
                                                w={'100%'}
                                            />
                                        </Box>
                                        <Box
                                            h={'100%'}
                                            w={'100%'}
                                        >
                                            <Image
                                                src={cc_admin}
                                                h={'100%'}
                                                w={'100%'}
                                            />
                                        </Box>
                                        <Box
                                            h={'100%'}
                                            w={'100%'}
                                        >
                                            <Image
                                                src={cc_cashier_order}
                                                h={'100%'}
                                                w={'100%'}
                                            />
                                        </Box>
                                    </Slider>
                                </Box>
                            </Flex>
                            <Flex
                                flexDir={'column'}
                                my={'6'}
                            >
                                <Text
                                    fontSize={'xl'}
                                    fontWeight={'semibold'}
                                >
                                    Coffee Cashier
                                </Text>
                            </Flex>
                        </CardBody>
                        <Divider
                            w={'90%'}
                            alignSelf={'center'}
                        />
                        <CardFooter>
                            <Flex
                                h={'100%'}
                                w={'100%'}
                                justifyContent={'center'}
                                alignItems={'center'}
                                gap={'10'}
                                p={'1'}
                            >
                                <Link
                                    href='https://github.com/Harris011/pos-coffee-cashier'
                                    isExternal
                                >
                                    <Button
                                        rounded={'lg'}
                                        size={'sm'}
                                        fontSize={'md'}
                                        fontWeight={'normal'}
                                        variant={'outline'}
                                        borderColor={'gray.500'}
                                        _hover={{'bg': 'gray.500', 'color': 'white', 'border': '1px', 'borderColor': 'gray.500'}}
                                    >
                                        Github
                                    </Button>
                                </Link>
                                <Button
                                    rounded={'lg'}
                                    size={'sm'}
                                    fontSize={'md'}
                                    fontWeight={'normal'}
                                    variant={'outline'}
                                    borderColor={'gray.500'}
                                    _hover={{'bg': 'gray.500', 'color': 'white', 'border': '1px', 'borderColor': 'gray.500'}}
                                    onClick={()=> navigate('/coffecashier', {replace: true})}
                                >
                                    Detail
                                </Button>
                            </Flex>
                        </CardFooter>
                    </Card>
                </Flex>
            </Flex>
        </Flex>
     );
}

export default Projects;