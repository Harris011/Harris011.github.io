import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { 
    Box, 
    Button, 
    Flex, 
    Heading,
    Icon,
    IconButton,
    Image,
    Text
} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ts_dst_task from '../assets/tsm/ts_dst_task.png';
import ts_dst_board_create from '../assets/tsm/ts_dst_board_create.png';
import ts_dst_board_edit from '../assets/tsm/ts_dst_board_edit.png';
import ts_dst_board_delete from '../assets/tsm/ts_dst_board_delete.png';
import ts_dst_task_create from '../assets/tsm/ts_dst_task_create.png';
import ts_dst_task_edit from '../assets/tsm/ts_dst_task_edit.png';
import ts_dst_task_delete from '../assets/tsm/ts_dst_task_delete.png';
import ts_dst_task_notification from '../assets/tsm/ts_dst_task_notification.png';
import ts_dst_task_active from '../assets/tsm/ts_dst_task_active.png';
import ts_dst_task_done from '../assets/tsm/ts_dst_task_done.png';
import ts_dst_light from '../assets/tsm/ts_dst_light.png';
import { BsListTask } from 'react-icons/bs';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { AddIcon } from '@chakra-ui/icons';
import { BsThreeDots } from 'react-icons/bs';
import { FaRegBell } from 'react-icons/fa';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';

function TasksManagement() {
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
            p={'2'}
        >
            <Heading>
                Task Smith
            </Heading>
            {/* Project Description */}
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
                        h={{base:'100%', sm:'100%', md:'240px', lg:'240px', xl:'240px'}}
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
                                    h={'100%'}
                                    w={'100%'}
                                    src={ts_dst_task}
                                    objectFit={'cover'}
                                />
                            </Box>
                            <Box
                                h={'100%'}
                                w={'100%'}
                            >
                                <Image
                                    h={'100%'}
                                    w={'100%'}
                                    src={ts_dst_light}
                                    objectFit={'cover'}
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
                        Task Smith is your preferred task management app, allowing users to easily create, update, and delete tasks. 
                        It supports organization by enabling users to efficiently categorize tasks using boards, each representing a specific category. 
                        Stay informed about your responsibilities with notifications for incoming tasks. 
                        Task Smith simplifies task management, making it user-friendly and adaptable to your needs.
                        Task Smith lets you choose between dark and light modes, so you can manage tasks in a style that suits you best.
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
                        <Box as='span' fontWeight={'semibold'} >Frontend:</Box> React.js, Axios, Redux, React Router, Chakra UI Icons, and React Icons.
                    </Text>
                    <Text
                        textAlign={'justify'}
                        py={'0.5'}
                    >
                        <Box as='span' fontWeight={'semibold'} >Backend:</Box> Node.js, Cors, Dotenv, Express, Sequelize, MySQL 2.
                    </Text>
                </Flex>
            </Flex>
            {/* User Guide */}
            <Flex
                justifyContent={'center'}
                flexDir={'column'}
                gap={'2'}
            >
                <Heading
                    fontSize={'2xl'}
                >
                    User Guide
                </Heading>
                {/* Create Board */}
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
                            Create Boards
                        </Text>
                        <Text
                            textAlign={'justify'}
                        >
                            To initiate a new board in Task Smith, begin by navigating to the <Icon as={MdOutlineDashboardCustomize} /> "Board" page. 
                            Once there, click the "
                            <Button
                                leftIcon={
                                    <AddIcon
                                        boxSize={'2'}
                                    />
                                }
                                iconSpacing={'2'}
                                size={'xs'}
                                letterSpacing={'tight'}
                                border={'0.5px'}
                                borderStyle={'dashed'}
                                variant={'outline'}
                                mx={'1'}
                            >
                                Add Board
                            </Button>"
                            button. A form will appear, allowing you to enter the desired board name. After inputting the name, 
                            click the "
                            <Button
                                colorScheme={'twitter'}
                                size={'xs'}
                                mx={'1'}
                            >
                                Add
                            </Button>"
                            button to create the new board.
                        </Text>
                    </Flex>
                    <Flex
                        flex={'1'}
                        h={'220px'}
                        w={{base:'100%', sm:'100%', md:'350px', lg:'350px', xl:'350px'}}
                        justifyContent={'center'}
                        align={'center'}
                        order={{base:'1', sm:'1', md:'2', lg:'2', xl:'2'}}
                    >
                        <Image
                            alt='Project image'
                            src={ts_dst_board_create}
                            h={'100%'}
                            w={'100%'}
                        />
                    </Flex>
                </Flex>
                {/* Edit Board */}
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
                            Edit Boards
                        </Text>
                        <Text
                            textAlign={'justify'}
                        >
                            For editing a Board in Task Smith, by click the "<IconButton bg={'gray.200'} rounded={'full'} p={'1'} size={'xs'} as={BsThreeDots} mx={'1'}/>" button located on the top right of the board card. 
                            Select "Edit Board," make the necessary changes, and then click the "
                            <Button
                                colorScheme={'twitter'}
                                size={'xs'}
                                mx={'1'}
                            >
                                Save
                            </Button>"
                            button to apply and save the modifications.
                        </Text>
                    </Flex>
                    <Flex
                        flex={'1'}
                        h={'220px'}
                        w={{base:'100%', sm:'100%', md:'350px', lg:'350px', xl:'350px'}}
                        justifyContent={'center'}
                        align={'center'}
                        order={{base:'1', sm:'1', md:'2', lg:'2', xl:'2'}}
                    >
                        <Image
                            alt='Project image'
                            src={ts_dst_board_edit}
                            h={'100%'}
                            w={'100%'}
                        />
                    </Flex>
                </Flex>
                {/* Delete Board */}
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
                            Delete Boards
                        </Text>
                        <Text
                            textAlign={'justify'}
                        >
                            To delete a board in Task Smith, click the "<IconButton bg={'gray.200'} rounded={'full'} p={'1'} size={'xs'} as={BsThreeDots} mx={'1'}/>" button located on the top right of the board card. 
                            Select "Delete," and a confirmation prompt will appear. Be cautious as this action is irreversible, and it's recommended to double-check. A reminder states, "Be careful, you can undo this action afterward."
                        </Text>
                    </Flex>
                    <Flex
                        flex={'1'}
                        h={'220px'}
                        w={{base:'100%', sm:'100%', md:'350px', lg:'350px', xl:'350px'}}
                        justifyContent={'center'}
                        align={'center'}
                        order={{base:'1', sm:'1', md:'2', lg:'2', xl:'2'}}
                    >
                        <Image
                            alt='Project image'
                            src={ts_dst_board_delete}
                            h={'100%'}
                            w={'100%'}
                        />
                    </Flex>
                </Flex>
                {/* Create Task */}
                <Flex
                    justifyContent={'space-evenly'}
                    py={'2'}
                    flexDir={{base:'column', sm:'column', md:'row', lg:'row', xl:'row'}}
                    gap={'4'}
                >
                    <Flex
                        flex={'1'}
                        h={'220px'}
                        w={{base:'100%', sm:'100%', md:'350px', lg:'350px', xl:'350px'}}
                        justifyContent={'center'}
                        align={'center'}
                    >
                        <Image
                            alt='Project image'
                            src={ts_dst_task_create}
                            h={'100%'}
                            w={'100%'}
                        />
                    </Flex>
                    <Flex
                        flexDir={'column'}
                        flex={'1'}
                    >
                        <Text
                            textAlign={'justify'}
                            textDecoration={'underline'}
                            textUnderlineOffset={'0.5rem'}
                            fontWeight={'semibold'}
                            pb={'1'}
                        >
                            Create Task
                        </Text>
                        <Text
                            textAlign={'justify'}
                        >
                            To create a new task in Task Smith, navigate to the <Icon as={BsListTask} /> "Task" page. 
                            Click the "
                            <Button
                                leftIcon={
                                    <AddIcon
                                        boxSize={'2'}
                                    />
                                }
                                iconSpacing={'2'}
                                size={'xs'}
                                letterSpacing={'tight'}
                                border={'0.5px'}
                                borderStyle={'dashed'}
                                variant={'outline'}
                                mx={'1'}
                            >
                                Add Task
                            </Button>" 
                            button, and a form will appear. Fill in all the required fields, including title, date, and selecting a board. You can also add an optional description. Once all the details are filled, click the "
                            <Button
                                colorScheme={'twitter'}
                                size={'xs'}
                                mx={'1'}
                            >
                                Add
                            </Button>" 
                            button to create the new task.
                        </Text>
                    </Flex>
                </Flex>
                {/* Edit Task */}
                <Flex
                    justifyContent={'space-evenly'}
                    py={'2'}
                    flexDir={{base:'column', sm:'column', md:'row', lg:'row', xl:'row'}}
                    gap={'4'}
                >
                    <Flex
                        flex={'1'}
                        h={'220px'}
                        w={{base:'100%', sm:'100%', md:'350px', lg:'350px', xl:'350px'}}
                        justifyContent={'center'}
                        align={'center'}
                    >
                        <Image
                            alt='Project image'
                            src={ts_dst_task_edit}
                            h={'100%'}
                            w={'100%'}
                        />
                    </Flex>
                    <Flex
                        flexDir={'column'}
                        flex={'1'}
                    >
                        <Text
                            textAlign={'justify'}
                            textDecoration={'underline'}
                            textUnderlineOffset={'0.5rem'}
                            fontWeight={'semibold'}
                            pb={'1'}
                        >
                            Edit Task
                        </Text>
                        <Text
                            textAlign={'justify'}
                        >
                            For editing a task in Task Smith, click the "<IconButton bg={'gray.200'} rounded={'full'} p={'1'} size={'xs'} as={BsThreeDots} mx={'1'}/>" button located on the top left corner of the task card. 
                            Select "Edit Task." Modify the title, change the date, add, edit, or remove the description, and change the board as needed. After making the desired changes, click the "
                            <Button
                                colorScheme={'twitter'}
                                size={'xs'}
                                mx={'1'}
                            >
                                Save
                            </Button>"
                            button to apply and save the modifications. 
                        </Text>
                    </Flex>
                </Flex>
                {/* Delete Task */}
                <Flex
                    justifyContent={'space-evenly'}
                    py={'2'}
                    flexDir={{base:'column', sm:'column', md:'row', lg:'row', xl:'row'}}
                    gap={'4'}
                >
                    <Flex
                        flex={'1'}
                        h={'220px'}
                        w={{base:'100%', sm:'100%', md:'350px', lg:'350px', xl:'350px'}}
                        justifyContent={'center'}
                        align={'center'}
                    >
                        <Image
                            alt='Project image'
                            src={ts_dst_task_delete}
                            h={'100%'}
                            w={'100%'}
                        />
                    </Flex>
                    <Flex
                        flexDir={'column'}
                        flex={'1'}
                    >
                        <Text
                            textAlign={'justify'}
                            textDecoration={'underline'}
                            textUnderlineOffset={'0.5rem'}
                            fontWeight={'semibold'}
                            pb={'1'}
                        >
                            Delete Task
                        </Text>
                        <Text
                            textAlign={'justify'}
                        >
                            To delete a Task in task Smith, click the "<IconButton bg={'gray.200'} rounded={'full'} p={'1'} size={'xs'} as={BsThreeDots} mx={'1'}/>" button located on the top left of the Task card. 
                            Select "Delete," and a confirmation prompt will appear. Please exercise caution as this action is irreversible. it's recommended to double-check. A reminder states, "Be careful, you can undo this action afterward."
                        </Text>
                    </Flex>
                </Flex>
                {/* Task Notification */}
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
                            Task Notification
                        </Text>
                        <Text
                            textAlign={'justify'}
                        >
                            Stay updated on upcoming tasks by clicking the "<Icon mx={'1'} as={FaRegBell}/>" button to access the notification menu. Here, you'll find a list of all incoming tasks. You will receive reminders three days in advance of each task's scheduled date, ensuring that you stay well-informed and prepared for your upcoming tasks.
                        </Text>
                    </Flex>
                    <Flex
                        flex={'1'}
                        h={'220px'}
                        w={{base:'100%', sm:'100%', md:'350px', lg:'350px', xl:'350px'}}
                        justifyContent={'center'}
                        align={'center'}
                        order={{base:'1', sm:'1', md:'2', lg:'2', xl:'2'}}
                    >
                        <Image
                            alt='Project image'
                            src={ts_dst_task_notification}
                            h={'100%'}
                            w={'100%'}
                        />
                    </Flex>
                </Flex>
                {/* Active Task */}
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
                            Active Task
                        </Text>
                        <Text
                            textAlign={'justify'}
                        >
                            When you create a new task, it will appear in the "Active" section on the task page. 
                            If you believe you have completed the task, you can update its status by clicking the "<IconButton bg={'gray.200'} rounded={'full'} p={'1'} size={'xs'} as={CheckIcon} mx={'1'}/>" button. 
                            This action will move the task to the "Done" section.
                        </Text>
                    </Flex>
                    <Flex
                        flex={'1'}
                        h={'220px'}
                        w={{base:'100%', sm:'100%', md:'350px', lg:'350px', xl:'350px'}}
                        justifyContent={'center'}
                        align={'center'}
                        order={{base:'1', sm:'1', md:'2', lg:'2', xl:'2'}}
                    >
                        <Image
                            alt='Project image'
                            src={ts_dst_task_active}
                            h={'100%'}
                            w={'100%'}
                        />
                    </Flex>
                </Flex>
                {/* Done Task */}
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
                            Done Task
                        </Text>
                        <Text
                            textAlign={'justify'}
                        >
                            Review all tasks that have been completed in the "Done" section on the task page. 
                            You can check all the completed tasks here, make changes to them, and reactivate a task by clicking the "<IconButton bg={'gray.200'} rounded={'full'} p={'1'} size={'xs'} as={CloseIcon} mx={'1'}/>" button. 
                            This action will move the completed task back to the "Active" section.
                        </Text>
                    </Flex>
                    <Flex
                        flex={'1'}
                        h={'220px'}
                        w={{base:'100%', sm:'100%', md:'350px', lg:'350px', xl:'350px'}}
                        justifyContent={'center'}
                        align={'center'}
                        order={{base:'1', sm:'1', md:'2', lg:'2', xl:'2'}}
                    >
                        <Image
                            alt='Project image'
                            src={ts_dst_task_done}
                            h={'100%'}
                            w={'100%'}
                        />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
     );
}

export default TasksManagement;