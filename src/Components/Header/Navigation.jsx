import { Box, Divider, HStack, Icon, ListItem, Spacer, Stack, UnorderedList, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { IoRocketOutline, IoAddCircleOutline } from "react-icons/io5";
import { BsGrid, BsFillCircleFill } from "react-icons/bs"
import { FiShoppingBag, FiMessageCircle } from "react-icons/fi"
import { MdOutlineArticle } from "react-icons/md"
import { NavLink } from 'react-router-dom';

export default function Navigation() {

    const [MobileWidth] = useMediaQuery('(max-width: 1000px)')

    return (
        <Box position='fixed' left='0' right='0'>
            <UnorderedList listStyleType='none' p={MobileWidth ? '.9em' : '1.5em'}>
                <HStack>
                    <Stack align='center'>
                        <ListItem color='black' fontFamily='Open Sans' fontSize='2em' fontWeight='900'>
                            <NavLink>GONANA</NavLink>
                        </ListItem>
                    </Stack>
                    <Spacer />
                    <HStack align='center' pr={MobileWidth ? '0em' : '1em'} spacing='2em'>
                        <ListItem>
                            <NavLink>
                                <Icon boxSize='2em' as={IoRocketOutline} />
                            </NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink>
                                <Icon boxSize='2em' as={IoAddCircleOutline} />
                            </NavLink>
                        </ListItem>
                    </HStack>
                </HStack>
            </UnorderedList>
            <Divider orientation='horizontal' />
        </Box >
    )
}


export function BottomNav() {
    return (
        <Box position='fixed' bottom='0' right='0' left='0'>
                <Divider />
            <HStack spacing='2em' justify='space-around' p='1em'>
                <Icon boxSize='2em' as={BsGrid} />
                <Icon boxSize='2em' as={FiShoppingBag} />
                <Icon boxSize='2em' as={MdOutlineArticle} />
                <Icon boxSize='2em' as={FiMessageCircle} />
                <Icon boxSize='2em' as={BsFillCircleFill} />
            </HStack>
        </Box>
    )
}