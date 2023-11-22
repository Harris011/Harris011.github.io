import React from 'react';
import { 
    Box, 
    Flex, 
    IconButton, 
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'
import { useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();

    const projectRoute = ['/tasksmanagement', '/coffecashier'].includes(location.pathname);

    return ( 
        <Box
            h={'12vh'}
            w={{sm:'100vw', sm:'100vw', md:'100vw', lg:'74vw', xl:'74vw'}}
            id='navbar'
        >
            <Flex
                h={'100%'}
                w={'100%'}
                justifyContent={'end'}
                alignItems={'center'}
                px={{base:'8', sm:'8', md:'10', lg:'10'}}
            >
                <Flex
                    justifyContent={'center'}
                    alignItems={'center'}
                    display={{base:'flex', sm:'flex', md:'none', lg:'none', xl:'none'}}
                >
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            icon={<HamburgerIcon/>}
                            variant={'outline'}
                            size={'lg'}
                            borderColor={'gray.700'}
                        />
                        <MenuList>
                            {
                                projectRoute ? (
                                    <MenuItem>
                                        <Link
                                            href='/#home'
                                            className='nav-link'
                                            fontSize={'lg'}
                                        >
                                            Home
                                        </Link>
                                    </MenuItem>
                                ) : (
                                    <>
                                        <MenuItem>
                                            <Link
                                                href='#about'
                                                className='nav-link'
                                                fontSize={'lg'}
                                            >
                                                About
                                            </Link>
                                        </MenuItem>
                                        <MenuItem>
                                            <Link
                                                href='#projects'
                                                className='nav-link'
                                                fontSize={'lg'}
                                            >
                                                Projects
                                            </Link>
                                        </MenuItem>
                                        <MenuItem>
                                            <Link
                                                href='#contact'
                                                className='nav-link'
                                                fontSize={'lg'}
                                            >
                                                Contact
                                            </Link>
                                        </MenuItem>
                                    </>
                                )
                            }
                        </MenuList>
                    </Menu>
                </Flex>
                <Flex
                    h={'100%'}
                    w={'auto'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    gap={'10'}
                    display={{base:'none', sm:'none', md:'flex', lg:'flex', xl:'flex'}}
                >
                    {
                        projectRoute ? (
                        <Link
                            href='/#home'   
                            className='nav-link'
                            fontSize={'xl'}
                            _hover={{'color': 'gray.500', 'textDecoration':'underline'}}
                        >
                            Home
                        </Link>
                        ) : (
                        <>
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
                        </>
                        )
                    }
                </Flex>
            </Flex>
        </Box>
     );
}

export default Navbar;