import React from 'react';
import Slider from 'react-slick';
import { 
    Box, 
    Flex,
    Text,
    Image,
    Heading,
    Icon,
    Button
} from '@chakra-ui/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cc_cashier from '../assets/cc/cc_cashier.png';
import cc_cashier_dashboard_nav from '../assets/cc/cc_cashier_dashboard_nav.png';
import cc_cashier_dashboard_middle from '../assets/cc/cc_cashier_dashboard_middle.png';
import cc_cashier_dashboard_right from '../assets/cc/cc_cashier_dashboard_right.png';
import cc_cashier_product_search from '../assets/cc/cc_cashier_product_search.png';
import cc_cashier_product_sort_name from '../assets/cc/cc_cashier_product_sort_name.png';
import cc_cashier_product_sort_price from '../assets/cc/cc_cashier_product_sort_price.png';
import cc_cashier_product_sort_category from '../assets/cc/cc_cashier_proudtc_sort_category.png';
import cc_cashier_order_1 from '../assets/cc/cc_cashier_order_1.png';
import cc_cashier_order_2 from '../assets/cc/cc_cashier_order_2.png';
import cc_cashier_order_3 from '../assets/cc/cc_cashier_order_3.png';
import cc_cashier_transaction_1 from '../assets/cc/cc_cashier_transaction_1.png';
import cc_cashier_transaction_2 from '../assets/cc/cc_cashier_transaction_2.png';
import cc_cashier_transaction_3 from '../assets/cc/cc_cashier_transaction_3.png';
import cc_cashier_transaction_4 from '../assets/cc/cc_cashier_transaction_4.png';
import cc_cashier_transaction_5 from '../assets/cc/cc_cashier_transaction_5.png';
import { AiFillHome } from 'react-icons/ai';
import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { BsFillBasket2Fill } from 'react-icons/bs';

function CoffeeCashierCashier() {
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
            flexDir={'column'}
            py={'2'}
            gap={'2'}
        >
            <Heading
                fontSize={'2xl'}
            >
                Cashier Guide
            </Heading>
            {/* Dashboard */}
            {/* Product */}
            <Flex
                justifyContent={'space-evenly'}
                py={'2'}
                flexDir={{base:'column', sm:'column', md:'row', lg:'row', xl:'row'}}
                gap={{base:'6', sm:'6', md:'4', lg:'4', xl:'4'}}
            >
                <Flex
                    flexDir={'column'}
                    flex={'1'}
                    order={{base:'2', sm:'2', md:'1', lg:'1', xl:'1'}}
                >
                    <Text
                        textAlign={'justify'}
                        textDecorationLine={'underline'}
                        textUnderlineOffset={'0.5rem'}
                        fontWeight={'semibold'}
                        pb={'1'}
                    >
                        Cashier Dashboard
                    </Text>
                    <Text
                        textAlign={'justify'}
                    >
                        In the cashier dashboard, you can easily see a list of products. This helps you check details like names, prices, and how many are available. Plus, the dashboard lets you quickly create orders. Just pick the products you want, say how many, and start the order
                    </Text>
                    <Text
                        textAlign={'justify'}
                    >
                        1. Navigation menu
                    </Text>
                    <Text
                        textAlign={'justify'}
                    >
                        Use the navigation menu to switch between pages. Click on <Icon as={AiFillHome} /> "Dashboard" to access the dashboard page, and <Icon as={FaMoneyBillTransfer} /> "Transaction" for the transaction page.
                    </Text>
                    <Text
                        textAlign={'justify'}
                    >
                        2. Product List
                    </Text>
                    <Text
                        textAlign={'justify'}
                    >
                        Here, you can browse a list of products. You'll find details like product name, price, and stock quantity.
                    </Text>
                    <Text
                        textAlign={'justify'}
                    >
                        3. Order
                    </Text>
                    <Text
                        textAlign={'justify'}
                    >
                        In this section, orders are gathered before finalizing the transaction. You have the flexibility to modify product quantities and review the subtotal, tax, and total prices.
                    </Text>
                </Flex>
                <Flex
                    flex={'1'}
                    mx={'1'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    flexDir={'column'}
                    order={{base:'1', sm:'1', md:'2', lg:'2', xl:'2'}}
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
                                    src={cc_cashier}
                                    h={'100%'}
                                    w={'100%'}
                                />
                            </Box>
                            <Box
                                h={'100%'}
                                w={'100%'}
                            >
                                <Image
                                    src={cc_cashier_dashboard_nav}
                                    h={'100%'}
                                    w={'100%'}
                                />
                            </Box>
                            <Box
                                h={'100%'}
                                w={'100%'}
                            >
                                <Image
                                    src={cc_cashier_dashboard_middle}
                                    h={'100%'}
                                    w={'100%'}
                                />
                            </Box>
                            <Box
                                h={'100%'}
                                w={'100%'}
                            >
                                <Image
                                    src={cc_cashier_dashboard_right}
                                    h={'100%'}
                                    w={'100%'}
                                />
                            </Box>
                        </Slider>
                    </Box>
                </Flex>
            </Flex>
            {/* Search and Sort Product */}
            <Flex
                justifyContent={'space-evenly'}
                py={'2'}
                flexDir={{base:'column', sm:'column', md:'row', lg:'row', xl:'row'}}
                gap={{base:'6', sm:'6', md:'4', lg:'4', xl:'4'}}
            >
                <Flex
                    flexDir={'column'}
                    flex={'1'}
                    order={{base:'2', sm:'2', md:'1', lg:'1', xl:'1'}}
                >
                    <Text
                        textAlign={'justify'}
                        textDecorationLine={'underline'}
                        textUnderlineOffset={'0.5rem'}
                        fontWeight={'semibold'}
                        pb={'1'}
                    >
                        Serach and Sort Product
                    </Text>
                    <Text
                        textAlign={'justify'}
                    >
                        On the dashboard page within the product list, you can easily search and sort products. Search by product name, and sort products by name in ascending or descending order, by price from low to high or high to low, and by category.
                    </Text>
                </Flex>
                <Flex
                    flex={'1'}
                    mx={'1'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    flexDir={'column'}
                    order={{base:'1', sm:'1', md:'2', lg:'2', xl:'2'}}
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
                                    src={cc_cashier_product_search}
                                    h={'100%'}
                                    w={'100%'}
                                />
                            </Box>
                            <Box
                                h={'100%'}
                                w={'100%'}
                            >
                                <Image
                                    src={cc_cashier_product_sort_name}
                                    h={'100%'}
                                    w={'100%'}
                                />
                            </Box>
                            <Box
                                h={'100%'}
                                w={'100%'}
                            >
                                <Image
                                    src={cc_cashier_product_sort_price}
                                    h={'100%'}
                                    w={'100%'}
                                />
                            </Box>
                            <Box
                                h={'100%'}
                                w={'100%'}
                            >
                                <Image
                                    src={cc_cashier_product_sort_category}
                                    h={'100%'}
                                    w={'100%'}
                                />
                            </Box>
                        </Slider>
                    </Box>
                </Flex>
            </Flex>
            {/* Order */}
            <Flex
                justifyContent={'space-evenly'}
                py={'2'}
                flexDir={{base:'column', sm:'column', md:'row', lg:'row', xl:'row'}}
                gap={{base:'6', sm:'6', md:'4', lg:'4', xl:'4'}}
            >
                <Flex
                    flexDir={'column'}
                    flex={'1'}
                    order={{base:'2', sm:'2', md:'1', lg:'1', xl:'1'}}
                >
                    <Text
                        textAlign={'justify'}
                        textDecorationLine={'underline'}
                        textUnderlineOffset={'0.5rem'}
                        fontWeight={'semibold'}
                        pb={'1'}
                    >
                        Order
                    </Text>
                    <Text
                        textAlign={'justify'}
                    >
                        To place an order, select a product and clicking the "<Icon mx={'0.5'} as={BsFillBasket2Fill}/>" button in the top right corner of the product card. 
                        The chosen product will then appear in the order list. In the order list, you can see the selected products and adjust the quantity for each item. 
                        Additionally, the subtotal for each product, based on the entered quantity, and the total price for all products in the list, will be displayed.
                    </Text>
                </Flex>
                <Flex
                    flex={'1'}
                    mx={'1'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    flexDir={'column'}
                    order={{base:'1', sm:'1', md:'2', lg:'2', xl:'2'}}
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
                                    src={cc_cashier_order_1}
                                    h={'100%'}
                                    w={'100%'}
                                />
                            </Box>
                            <Box
                                h={'100%'}
                                w={'100%'}
                            >
                                <Image
                                    src={cc_cashier_order_2}
                                    h={'100%'}
                                    w={'100%'}
                                />
                            </Box>
                            <Box
                                h={'100%'}
                                w={'100%'}
                            >
                                <Image
                                    src={cc_cashier_order_3}
                                    h={'100%'}
                                    w={'100%'}
                                />
                            </Box>
                        </Slider>
                    </Box>
                </Flex>
            </Flex>
            {/* Transaction */}
            <Flex
                justifyContent={'space-evenly'}
                py={'2'}
                flexDir={{base:'column', sm:'column', md:'row', lg:'row', xl:'row'}}
                gap={{base:'6', sm:'6', md:'4', lg:'4', xl:'4'}}
            >
                <Flex
                    flex={'1'}
                    mx={'1'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    flexDir={'column'}
                    order={'1'}
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
                                    src={cc_cashier_transaction_1}
                                    h={'100%'}
                                    w={'100%'}
                                />
                            </Box>
                            <Box
                                h={'100%'}
                                w={'100%'}
                            >
                                <Image
                                    src={cc_cashier_transaction_2}
                                    h={'100%'}
                                    w={'100%'}
                                />
                            </Box>
                            <Box
                                h={'100%'}
                                w={'100%'}
                            >
                                <Image
                                    src={cc_cashier_transaction_3}
                                    h={'100%'}
                                    w={'100%'}
                                />
                            </Box>
                            <Box
                                h={'100%'}
                                w={'100%'}
                            >
                                <Image
                                    src={cc_cashier_transaction_4}
                                    h={'100%'}
                                    w={'100%'}
                                />
                            </Box>
                            <Box
                                h={'100%'}
                                w={'100%'}
                            >
                                <Image
                                    src={cc_cashier_transaction_5}
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
                    order={'2'}
                >
                    <Text
                        textAlign={'justify'}
                        textDecorationLine={'underline'}
                        textUnderlineOffset={'0.5rem'}
                        fontWeight={'semibold'}
                        pb={'1'}
                    >
                        Transaction
                    </Text>
                    <Text
                        textAlign={'justify'}
                    >
                        Once you've created an order, proceed to the transaction by clicking 
                        "<Button
                            size={'xs'}
                            bgColor={'white'}
                            color={'black'}
                            fontWeight={'normal'}
                            fontSize={'sm'}
                            rounded={'md'}
                            border={'1px'}
                            borderColor={'gray.200'}
                            mx={'1'}
                        >
                            Print Receipt
                        </Button>"
                        Button.
                        This action will navigate you to the transaction page.
                    </Text>
                    <Text
                        textAlign={'justify'}
                    >
                        On the transaction page, you'll find the order listed with a status of "<Box as="span" color="red.500">Incomplete</Box>" in the transaction list. 
                        To proceed with the transaction, click the 
                        "<Button
                            size={'xs'}
                            bgColor={'white'}
                            color={'black'}
                            fontWeight={'normal'}
                            fontSize={'sm'}
                            rounded={'md'}
                            border={'1px'}
                            borderColor={'gray.200'}
                            mx={'1'}
                        >
                            Pay Now
                        </Button>"
                        button. 
                        After clicking, the status of the transaction will change to "<Box as="span" color="green.500">Complete</Box>", as reflected in the transaction list.
                    </Text>
                </Flex>
            </Flex>
        </Flex>
     );
}

export default CoffeeCashierCashier;