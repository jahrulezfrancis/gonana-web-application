import React from 'react';
import { Box, HStack, Avatar, useMediaQuery } from '@chakra-ui/react';
import User1 from "../Images/Jahrulez.jpg"
import User2 from "../Images/Jahrulez2.png"
import User3 from "../Images/woman.svg"

export function Stories() {
    const [onMobile] = useMediaQuery('(max-width: 1000px)')
    return (
        <Box h='auto' w='100%'>
            <HStack h='auto' mt={onMobile ? '2em' : "4em"} justify='center' w='100%' overflowX='auto' whiteSpace='nowrap'>
                <Avatar size={onMobile ? 'lg' : '2xl'} name='Dan Abrahmov' src={User1} />
                <Avatar size={onMobile ? 'lg' : '2xl'} name='Dan Abrahmov' src={User2} />
                <Avatar size={onMobile ? 'lg' : '2xl'} name='Dan Abrahmov' src={User3} />
                <Avatar size={onMobile ? 'lg' : '2xl'} name='Dan Abrahmov' src={User1} />
                <Avatar size={onMobile ? 'lg' : '2xl'} name='Dan Abrahmov' src={User2} />
                <Avatar size={onMobile ? 'lg' : '2xl'} name='Dan Abrahmov' src={User3} />
                <Avatar size={onMobile ? 'lg' : '2xl'} name='Dan Abrahmov' src={User3} />
                <Avatar size={onMobile ? 'lg' : '2xl'} name='Dan Abrahmov' src={User1} />
            </HStack>
        </Box>
    )
}