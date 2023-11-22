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
import cc_admin from '../assets/cc/cc_admin.png';
import cc_admin_nav from '../assets/cc/cc_admin_nav.png';
import cc_admin_middle from '../assets/cc/cc_admin_middle.png';
import cc_admin_right from '../assets/cc/cc_admin_right.png';
import cc_admin_sales_range from '../assets/cc/cc_admin_sales_range.png';
import cc_admin_product from '../assets/cc/cc_admin_product.png';
import cc_admin_product_search_name from '../assets/cc/cc_admin_product_search_name.png';
import cc_admin_product_search_category from '../assets/cc/cc_admin_product_search_category.png';
import cc_admin_product_sort from '../assets/cc/cc_admin_product_sort.png';
import cc_admin_product_create_1 from '../assets/cc/cc_admin_product_create_1.png';
import cc_admin_product_create_2 from '../assets/cc/cc_admin_product_create_2.png';
import cc_admin_product_detail_edit from '../assets/cc/cc_admin_product_detail_edit.png';
import cc_admin_product_update_1 from '../assets/cc/cc_admin_product_update_1.png';
import cc_admin_product_update_2 from '../assets/cc/cc_admin_product_update_2.png';
import cc_admin_category from '../assets/cc/cc_admin_category.png';
import cc_admin_category_search from '../assets/cc/cc_admin_category_search.png';
import cc_admin_category_sort from '../assets/cc/cc_admin_category_sort.png';
import cc_admin_category_create from '../assets/cc/cc_admin_category_create.png';
import cc_admin_category_detail_edit from '../assets/cc/cc_admin_category_detail_edit.png';
import cc_admin_category_update_1 from '../assets/cc/cc_admin_category_update_1.png';
import cc_admin_category_update_2 from '../assets/cc/cc_admin_category_update_2.png';
import cc_admin_employee from '../assets/cc/cc_admin_employee.png';
import cc_admin_employee_search from '../assets/cc/cc_admin_employee_search.png';
import cc_admin_employee_sort from '../assets/cc/cc_admin_employee_sort.png';
import cc_admin_employee_create from '../assets/cc/cc_admin_employee_create.png';
import cc_admin_employee_detail_edit from '../assets/cc/cc_admin_employee_detail_edit.png';
import cc_admin_employee_update_1 from '../assets/cc/cc_admin_employee_update_1.png';
import cc_admin_employee_update_2 from '../assets/cc/cc_admin_employee_update_2.png';
import cc_admin_employee_reset from '../assets/cc/cc_admin_employee_reset.png';
import { AiFillHome } from 'react-icons/ai';
import { BsBoxes } from 'react-icons/bs';
import { BiCategoryAlt } from 'react-icons/bi';
import { IoIosPeople } from 'react-icons/io';
import { AddIcon } from '@chakra-ui/icons';

function CoffeeCashierAdmin() {
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
                Admin Guide
            </Heading>
            {/* Dashboard */}
            {/* Admin Dashboard */}
            <Flex
                justifyContent={'space-evenly'}
                py={'2'}
                flexDir={{base:'column', sm:'column', md:'row', lg:'row', xl:'row'}}
                gap={'4'}
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
                        Admin Dashboard
                    </Text>
                    <Text
                        textAlign={'justify'}
                    >
                        In the admin dashboard, you can access the sales report, view recent activities, track total revenue, and identify the best-selling products.
                    </Text>
                    <Text
                        textAlign={'justify'}
                    >
                        1. Navigation menu
                    </Text>
                    <Text
                        textAlign={'justify'}
                    >
                        Use the navigation menu to switch between pages. 
                        Click on <Icon as={AiFillHome} /> "Dashboards" to access the Dashboard page, <Icon as={BsBoxes} /> "Product" for the Product Management page, <Icon as={BiCategoryAlt} /> "Category" for the Category Management page, and <Icon as={IoIosPeople} /> "Employee" for the Employee Management page.
                    </Text>
                    <Text
                        textAlign={'justify'}
                    >
                        2. Sales and Recent activity
                    </Text>
                    <Text
                        textAlign={'justify'}
                    >
                        In the middle, there's a chart for sales. At the bottom, you can check the latest transactions. It shows the cashier, transaction date, and status.
                    </Text>
                    <Text
                        textAlign={'justify'}
                    >
                        3. Total Revenue and Best Seller
                    </Text>
                    <Text
                        textAlign={'justify'}
                    >
                        On the right side, you'll find the total revenue for the year, total revenue for the month, and a list of best-selling products.
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
                                    src={cc_admin_nav}
                                    h={'100%'}
                                    w={'100%'}
                                />
                            </Box>
                            <Box
                                h={'100%'}
                                w={'100%'}
                            >
                                <Image
                                    src={cc_admin_middle}
                                    h={'100%'}
                                    w={'100%'}
                                />
                            </Box>
                            <Box
                                h={'100%'}
                                w={'100%'}
                            >
                                <Image
                                    src={cc_admin_right}
                                    h={'100%'}
                                    w={'100%'}
                                />
                            </Box>
                        </Slider>
                    </Box>
                </Flex>
            </Flex>
            {/* Sales Report */}
            <Flex
                justifyContent={'space-evenly'}
                py={'2'}
                flexDir={{base:'column', sm:'column', md:'row', lg:'row', xl:'row'}}
                gap={'4'}
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
                        Sales Report
                    </Text>
                    <Text
                        textAlign={'justify'}
                    >
                        Within the sales report section, you can view daily sales for a month. Additionally, you have the option to search for sales within a specific date range. Simply enter the start date and end date to retrieve the desired information.
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
                                    src={cc_admin_sales_range}
                                    h={'100%'}
                                    w={'100%'}
                                />
                            </Box>
                        </Slider>
                    </Box>
                </Flex>
            </Flex>
            {/* Product */}
            {/* Product Managemet */}
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
                                    src={cc_admin_product}
                                    h={'100%'}
                                    w={'100%'}
                                />
                            </Box>
                            <Box
                                h={'100%'}
                                w={'100%'}
                            >
                                <Image
                                    src={cc_admin_product_search_name}
                                    h={'100%'}
                                    w={'100%'}
                                />
                            </Box>
                            <Box
                                h={'100%'}
                                w={'100%'}
                            >
                                <Image
                                    src={cc_admin_product_search_category}
                                    h={'100%'}
                                    w={'100%'}
                                />
                            </Box>
                            <Box
                                h={'100%'}
                                w={'100%'}
                            >
                                <Image
                                    src={cc_admin_product_sort}
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
                        Product Managemet
                    </Text>
                    <Text
                        textAlign={'justify'}
                    >
                        On the Product Management page, you have the ability to add, edit, and change the status of products. Additionally, you can conveniently search for products by name or category. Furthermore, you can sort products either alphabetically by name in ascending or descending order, or by price from low to high or high to low.
                    </Text>
                </Flex>
            </Flex>
            {/* Create New Product */}
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
                                    src={cc_admin_product_create_1}
                                    h={'100%'}
                                    w={'100%'}
                                />
                            </Box>
                            <Box
                                h={'100%'}
                                w={'100%'}
                            >
                                <Image
                                    src={cc_admin_product_create_2}
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
                        Create New Product
                    </Text>
                    <Text
                        textAlign={'justify'}
                    >
                        To create a new product, simply click the 
                        "<Button 
                            size={'xs'}
                            color={'white'} 
                            leftIcon={<AddIcon boxSize={'3'}/>}
                            letterSpacing={'tight'}
                            border={'0.5px'}
                            borderColor={'black'}
                            variant={'solid'}
                            bg={'black'}
                            mx={'1'}
                            fontSize={'sm'}
                            >
                                Add Product
                        </Button>" button.
                        A form will appear on the right side where you can upload an image for the product, enter the product name, select a category, specify the stock quantity, and set the product price. Fill in these details to successfully create a new product.
                    </Text>
                </Flex>
            </Flex>
            {/* Details and Edit Product */}
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
                                    src={cc_admin_product_detail_edit}
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
                        Details and Edit Product
                    </Text>
                    <Text
                        textAlign={'justify'}
                    >
                        To edit a product, click on "Detail" in the product list table. Once clicked, the details on the right side will display the product information. Make the necessary changes in the provided form, 
                        then click the
                        "<Button
                            size={'xs'}
                            colorScheme={'green'}
                            color={'white'}
                            fontSize={'sm'}
                            mx={'1'}
                        >
                            Save
                        </Button>"
                        button to save the modifications.
                    </Text>
                </Flex>
            </Flex>
            {/* Update Status Product */}
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
                                    src={cc_admin_product_update_1}
                                    h={'100%'}
                                    w={'100%'}
                                />
                            </Box>
                            <Box
                                h={'100%'}
                                w={'100%'}
                            >
                                <Image
                                    src={cc_admin_product_update_2}
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
                        Update Status Product
                    </Text>
                    <Text
                        textAlign={'justify'}
                    >
                        To update the product status, navigate to the product list table. Click the switch button in the status column to make changes. Reactivate a product by clicking the switch button again.
                    </Text>
                </Flex>
            </Flex>
            {/* Category */}
            {/* Category Management */}
            <Flex
                justifyContent={'space-evenly'}
                py={'2'}
                flexDir={{base:'column', sm:'column', md:'row', lg:'row', xl:'row'}}
                gap={'4'}
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
                        Category Management
                    </Text>
                    <Text
                        textAlign={'justify'}
                    >
                        Within the Category Management page, you can create, update, and change the status of categories. Additionally, you have the ability to search for categories by name and sort them in ascending or descending order.
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
                                    src={cc_admin_category}
                                    h={'100%'}
                                    w={'100%'}
                                />
                            </Box>
                            <Box
                                h={'100%'}
                                w={'100%'}
                            >
                                <Image
                                    src={cc_admin_category_search}
                                    h={'100%'}
                                    w={'100%'}
                                />
                            </Box>
                            <Box
                                h={'100%'}
                                w={'100%'}
                            >
                                <Image
                                    src={cc_admin_category_sort}
                                    h={'100%'}
                                    w={'100%'}
                                />
                            </Box>
                        </Slider>
                    </Box>
                </Flex>
            </Flex>
            {/* Create Category */}
            <Flex
                justifyContent={'space-evenly'}
                py={'2'}
                flexDir={{base:'column', sm:'column', md:'row', lg:'row', xl:'row'}}
                gap={'4'}
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
                        Create Category
                    </Text>
                    <Text
                        textAlign={'justify'}
                    >
                        To create a new category, click the 
                        "<Button 
                            size={'xs'}
                            color={'white'} 
                            leftIcon={<AddIcon boxSize={'3'}/>}
                            letterSpacing={'tight'}
                            border={'0.5px'}
                            borderColor={'black'}
                            variant={'solid'}
                            bg={'black'}
                            mx={'1'}
                            fontSize={'sm'}
                            >
                                Add Category
                        </Button>" button
                        . 
                        A form will appear on the right side where you need to enter the required category name to successfully create a new category.
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
                                    src={cc_admin_category_create}
                                    h={'100%'}
                                    w={'100%'}
                                />
                            </Box>
                        </Slider>
                    </Box>
                </Flex>
            </Flex>
            {/* Details and Edit Category */}
            <Flex
                justifyContent={'space-evenly'}
                py={'2'}
                flexDir={{base:'column', sm:'column', md:'row', lg:'row', xl:'row'}}
                gap={'4'}
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
                        Details and Edit Category
                    </Text>
                    <Text
                        textAlign={'justify'}
                    >
                        To edit a category, click on the category card in the category list. This will display the category details, allowing you to change the category name. Additionally, you can view all products related to the category.
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
                                    src={cc_admin_category_detail_edit}
                                    h={'100%'}
                                    w={'100%'}
                                />
                            </Box>
                        </Slider>
                    </Box>
                </Flex>
            </Flex>
            {/* Update Status of Category */}
            <Flex
                justifyContent={'space-evenly'}
                py={'2'}
                flexDir={{base:'column', sm:'column', md:'row', lg:'row', xl:'row'}}
                gap={'4'}
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
                        Update Status Category
                    </Text>
                    <Text
                        textAlign={'justify'}
                    >
                        On the right side, you'll find a list of categories along with their respective statuses. To update the status of a category, click the switch button in the status column. Reactivate a category by clicking the switch button again.
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
                                    src={cc_admin_category_update_1}
                                    h={'100%'}
                                    w={'100%'}
                                />
                            </Box>
                            <Box
                                h={'100%'}
                                w={'100%'}
                            >
                                <Image
                                    src={cc_admin_category_update_2}
                                    h={'100%'}
                                    w={'100%'}
                                />
                            </Box>
                        </Slider>
                    </Box>
                </Flex>
            </Flex>
            {/* Employee */}
            {/* Employee Managemet */}
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
                                    src={cc_admin_employee}
                                    h={'100%'}
                                    w={'100%'}
                                />
                            </Box>
                            <Box
                                h={'100%'}
                                w={'100%'}
                            >
                                <Image
                                    src={cc_admin_employee_search}
                                    h={'100%'}
                                    w={'100%'}
                                />
                            </Box>
                            <Box
                                h={'100%'}
                                w={'100%'}
                            >
                                <Image
                                    src={cc_admin_employee_sort}
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
                        Employee Managemet
                    </Text>
                    <Text
                        textAlign={'justify'}
                    >
                        Within the Employee Management page, you can add, edit, change the status of users, and reset user passwords. Additionally, you can search for users by name and sort them in ascending or descending order by name. The page also provides totals for admins, cashiers, and active or inactive users.
                    </Text>
                </Flex>
            </Flex>
            {/* Create New User */}
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
                                    src={cc_admin_employee_create}
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
                        Create New User
                    </Text>
                    <Text
                        textAlign={'justify'}
                    >
                        To create a new user, click the 
                        "<Button 
                            size={'xs'}
                            color={'white'} 
                            leftIcon={<AddIcon boxSize={'3'}/>}
                            letterSpacing={'tight'}
                            border={'0.5px'}
                            borderColor={'black'}
                            variant={'solid'}
                            bg={'black'}
                            mx={'1'}
                            fontSize={'sm'}
                            >
                                Add new user
                        </Button>" button
                        .
                        A form will appear on the right side where you can enter the username, email, select a role, and set a password along with confirmation. Fill in these details to successfully create a new user.
                    </Text>
                </Flex>
            </Flex>
            {/* Details and Edit User */}
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
                                    src={cc_admin_employee_detail_edit}
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
                        Details and Edit User
                    </Text>
                    <Text
                        textAlign={'justify'}
                    >
                        To edit a user, click on the username in the employee list table. This will display user details on the right side. After making the necessary changes, 
                        click the
                        "<Button
                            size={'xs'}
                            colorScheme={'green'}
                            color={'white'}
                            fontSize={'sm'}
                            mx={'1'}
                        >
                            Save
                        </Button>"
                        button to save the modifications.
                    </Text>
                </Flex>
            </Flex>
            {/* Update Status of User */}
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
                                    src={cc_admin_employee_update_1}
                                    h={'100%'}
                                    w={'100%'}
                                />
                            </Box>
                            <Box
                                h={'100%'}
                                w={'100%'}
                            >
                                <Image
                                    src={cc_admin_employee_update_2}
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
                        Update Status User
                    </Text>
                    <Text
                        textAlign={'justify'}
                    >
                        You can update the user status by changing it through the employee table. Click the switch button in the status column. To reactivate a user, simply click the switch button again.
                    </Text>
                </Flex>
            </Flex>
            {/* Reset password */}
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
                                    src={cc_admin_employee_reset}
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
                        Reset password
                    </Text>
                    <Text
                        textAlign={'justify'}
                    >
                        To reset the password, click "Reset Password" in the employee list for the desired user. After clicking, a form will appear on the right side, prompting you to enter a new password along with confirmation. The password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, and one number.
                    </Text>
                </Flex>
            </Flex>
        </Flex>
     );
}

export default CoffeeCashierAdmin;