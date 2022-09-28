import React from 'react';
import { Box, HStack, Avatar, useMediaQuery, VStack, Stack } from '@chakra-ui/react';
import User1 from "../Images/Jahrulez.jpg"
import User2 from "../Images/Jahrulez2.png"
import User3 from "../Images/woman.svg"

export function Stories() {
    const [onMobile] = useMediaQuery('(max-width: 1000px)')
    return (
        <Box h='200vh' w='100%' mt={onMobile ? '2em' : "4em"} overflowX='hidden'>
            <Stack align='flex-start'>
                <HStack justify='start' align='start' w='100%' overflowX='auto' whiteSpace='nowrap'>
                    <Avatar size={onMobile ? 'md' : 'md'} name='Dan Abrahmov' src={User1} />
                    <Avatar size={onMobile ? 'md' : 'md'} name='Dan Abrahmov' src={User2} />
                    <Avatar size={onMobile ? 'md' : 'md'} name='Dan Abrahmov' src={User3} />
                    <Avatar size={onMobile ? 'md' : 'md'} name='Dan Abrahmov' src={User1} />
                    <Avatar size={onMobile ? 'md' : 'md'} name='Dan Abrahmov' src={User2} />
                </HStack>
            </Stack>
        </Box>
    )
}

export default function StoryPage() {
    return (
        <VStack justify='start' align='start' 
        position='fixed' zIndex='2' bgColor='white'
        top='10' right='0' left='0' bottom='75%' 
        >
            <Stories />
        </VStack>
    )
}