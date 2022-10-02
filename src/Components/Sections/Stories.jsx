import React from 'react';
import { Box, HStack, Avatar, useMediaQuery, VStack } from '@chakra-ui/react';
import { UsersDB } from '../DataBase/Users';



export function StoryTemp(props) {
    const [onMobile] = useMediaQuery('(max-width: 1000px)')
    return (
        <Box h='200vh' w='100%' mt={onMobile ? '2em' : "3.5em"} alignItems='center'>
            <Avatar size={onMobile ? 'md' : 'md'} name={props.name} src={props.Avatar} />
        </Box>
    )
}

export function Stories() {
    return (
        <HStack>
            {UsersDB.map((element) => {
                return (
                    <Box key={element.id}>
                        <StoryTemp name={element.username} Avatar={element.image} />
                    </Box>
                )
            })}
        </HStack>
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