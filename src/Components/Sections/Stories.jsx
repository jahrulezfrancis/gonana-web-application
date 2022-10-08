import React from 'react';
import { Box, HStack, Avatar, useMediaQuery, VStack } from '@chakra-ui/react';
import { ActiveUsers } from '../DataBase/Users';


export function StoryTemp(props) {
    const [onMobile] = useMediaQuery('(max-width: 1000px)')
    return (
        <Box w='100%' alignItems='center'>
            <Avatar size={onMobile ? 'md' : 'md'} name={props.name} src={props.Avatar} />
        </Box>
    )
}



export function Stories() {
    return (
        <HStack w='100vw' overflowX='auto'>
            {ActiveUsers.map((element) => {
                return (
                    <Box key={element.id} p='.3em'>
                        <StoryTemp name={element.username} Avatar={element.picture} />
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
            top='4em' right='0' left='0' p='1em'
        >
            <Stories />
        </VStack>
    )
}