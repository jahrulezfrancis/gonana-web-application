import { Box, Divider, HStack, Icon, ListItem, Spacer, Stack, UnorderedList, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { IoRocketOutline, IoAddCircleOutline } from "react-icons/io5";
import { BsGrid, BsFillCircleFill } from "react-icons/bs"
import { FiShoppingBag, FiMessageCircle } from "react-icons/fi"
import { MdOutlineArticle } from "react-icons/md"
import { NavLink } from 'react-router-dom';
import { CreatePost } from '../Sections/CreatePost';



export function NavigationTemplate(props) {
    const [MobileWidth] = useMediaQuery('(max-width: 1000px)')

    return (
        <Box position='fixed' left='0' right='0' bgColor='white' zIndex='5'>
            <UnorderedList listStyleType='none' p={MobileWidth ? '.7em' : '1.5em'}>
                <HStack>
                    <Stack align='center'>
                        <ListItem ml='-.6em' color={props.headerColor} fontFamily='Open Sans'
                            fontSize={props.headerSize} fontWeight='600'>
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
                                {<CreatePost />}
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
        <NavigationTemplate NavHeader='GONANA' headerSize='1.8em' headerColor='green' icon1={<IoRocketOutline size='2em' />} icon2={<IoAddCircleOutline size='2em' />} />
    )

}


export function BottomNav() {
    return (
        <Box position='fixed' bottom='0' right='0' left='0' bgColor='white' zIndex='5'>
            <Divider />
            <HStack spacing='2em' justify='space-around' p='.7em'>
                <NavLink to='/home'>
                    <Icon boxSize='2.5em' as={BsGrid} />
                </NavLink>
                <NavLink to='/cart'>
                    <Icon boxSize='2.5em' as={FiShoppingBag} />
                </NavLink>
                <NavLink to='/orders'>
                    <Icon boxSize='2.5em' as={MdOutlineArticle} />
                </NavLink>
                <NavLink to='/message'>
                    <Icon boxSize='2.5em' as={FiMessageCircle} />
                </NavLink>
                <NavLink>
                    <Icon boxSize='2.5em' as={BsFillCircleFill} />
                </NavLink>
            </HStack>
        </Box>
    )
}