import { Box, Divider, HStack, Icon, ListItem, Spacer, Stack, UnorderedList, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { IoRocketOutline, IoAddCircleOutline } from "react-icons/io5";
import { BsGrid, BsFillCircleFill } from "react-icons/bs"
import { FiShoppingBag, FiMessageCircle } from "react-icons/fi"
import { MdOutlineArticle } from "react-icons/md"
import { NavLink } from 'react-router-dom';



export function NavigationTemplate(props) {
    const [MobileWidth] = useMediaQuery('(max-width: 1000px)')

    return (
        <Box position='fixed' left='0' right='0' bgColor='white'>
            <UnorderedList listStyleType='none' p={MobileWidth ? '.9em' : '1.5em'}>
                <HStack>
                    <Stack align='center'>
                        <ListItem color='green.500' fontFamily='Open Sans' fontSize='2em' fontWeight='900'>
                            <NavLink>{props.NavHeader}</NavLink>
                        </ListItem>
                    </Stack>
                    <Spacer />
                    <HStack align='center' pr={MobileWidth ? '0em' : '1em'} spacing='2em'>
                        <ListItem>
                            <NavLink>
                                {props.icon1}
                            </NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink>
                                {props.icon2}
                            </NavLink>
                        </ListItem>
                    </HStack>
                </HStack>
            </UnorderedList>
            <Divider orientation='horizontal' />
        </Box >
    )
}


export default function Navigation() {
    return (
        <NavigationTemplate NavHeader='Gonana' icon1={<IoRocketOutline size='2em' />} icon2={<IoAddCircleOutline size='2em' />} />
    )

}


export function BottomNav() {
    return (
        <Box position='fixed' bottom='0' right='0' left='0' bgColor='white'>
            <Divider />
            <HStack spacing='2em' justify='space-around' p='1em'>
                <NavLink to='/home'>
                    <Icon boxSize='2.5em' as={BsGrid} />
                </NavLink>
                <NavLink to='/cart'>
                    <Icon boxSize='2.5em' as={FiShoppingBag} />
                </NavLink>
                <NavLink to='/orders'>
                    <Icon boxSize='2.5em' as={MdOutlineArticle} />
                </NavLink>
                <NavLink>
                    <Icon boxSize='2.5em' as={FiMessageCircle} />
                </NavLink>
                <NavLink>
                    <Icon boxSize='2.5em' as={BsFillCircleFill} />
                </NavLink>
            </HStack>
        </Box>
    )
}