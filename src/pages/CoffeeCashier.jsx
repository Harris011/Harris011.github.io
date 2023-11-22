import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { 
    Box, 
    Flex, 
    Heading,
    Text,
    Image,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel
} from '@chakra-ui/react';
import CoffeeCashierAdmin from '../components/CoffeeCashierAdmin';
import CoffeeCashierCashier from '../components/CoffeeCashierCashier';
import { useLocation } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cc_login from '../assets/cc/cc_login.png';
import cc_admin from '../assets/cc/cc_admin.png';
import cc_cashier_order from '../assets/cc/cc_cashier_order.png';

function CoffeeCashier() {
    const location = useLocation();
    
    useEffect(() => {
        window.scrollTo(0,0);
    }, [location.pathname]);

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
            mx={'auto'}
            justifyContent={'center'}
            alignContent={'center'}
            flexDir={'column'}
            gap={'4'}
            p={'4'}
        >
            <Heading>
                Coffee Cashier
            </Heading>
            <Flex
                justifyContent={'space-evenly'}
                py={'2'}
                flexDir={{base:'column', sm:'column', md:'row', lg:'row', xl:'row'}}
                gap={'4'}
            >
                <Flex
                    flex={'1'}
                    mx={'1'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    flexDir={'column'}
                >
                    <Box
                        h={{base:'100%', sm:'100%', md:'250px', lg:'250px', xl:'250px'}}
                        w={{base:'100%', sm:'100%', md:'450px', lg:'450px', xl:'450px'}}
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
                    flex={'1'}
                >
                    <Text
                        textAlign={'justify'}
                    >
                        The Coffee Cashier is a specialized application designed for efficient coffee shop management. The system operates with two distinct roles: the Admin and the Cashier.
                        Admins are in charge of Product Management, Category Management, Employee Management, and Sales Monitoring. Cashiers are responsible for Order and Transaction.
                    </Text>
                    <Text
                        textAlign={'justify'}
                        py={'2'}
                        textDecoration={'underline'}
                        textUnderlineOffset={'0.5rem'}
                    >
                        Project Specification
                    </Text>
                    <Text
                        textAlign={'justify'}
                        py={'0.5'}
                    >
                        <Box as='span' fontWeight={'semibold'} >Frontend:</Box> React.js, Axios, Redux, React Router, Chart.js, React Chart.js 2, Chakra UI Icons, and React Icons.
                    </Text>
                    <Text
                        textAlign={'justify'}
                        py={'0.5'}
                    >
                        <Box as='span' fontWeight={'semibold'} >Backend:</Box> Node.js, Bcrypt, CORS, Dotenv, Express, Express-bearer-token, Express-validator, Jsonwebtoken, Multer, Sequelize, MySQL 2, UUID.
                    </Text>
                </Flex>
            </Flex>
            <Box
                h={'100%'}
                w={'100%'}
            >
                <Tabs
                    isFitted
                    variant={'enclosed'}
                    h={'100%'}
                    w={'100%'}
                >
                    <TabList
                        mb={'1rem'}
                        h={'100%'}
                        w={'100%'}
                    >
                        <Tab>
                            Admin
                        </Tab>
                        <Tab>
                            Cashier
                        </Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <CoffeeCashierAdmin/>
                        </TabPanel>
                        <TabPanel>
                            <CoffeeCashierCashier/>
                        </TabPanel>
                    </TabPanels>
                </Tabs>

            </Box>
        </Flex>
    );
}

export default CoffeeCashier;