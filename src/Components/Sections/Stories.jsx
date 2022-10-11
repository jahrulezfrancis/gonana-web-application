import React from 'react';
import { Box, HStack, Avatar, useMediaQuery, VStack } from '@chakra-ui/react';
import { StoryDB } from '../DataBase/Stories';


export function StoryTemp(props) {
    const [onMobile] = useMediaQuery('(max-width: 1000px)')
    return (
        <Box w='100%'>
            <Avatar size={onMobile ? 'md' : 'md'} name={props.name} src={props.Avatar} />
        </Box>
    )
}



export function Stories() {
    return (
        <HStack w='100vw' overflowX='auto'>
            {StoryDB.map((element) => {
                return (
                    <Box key={element.id} p='.3em'>
                        <StoryTemp name={element.author} Avatar={element.post_url} />
                    </Box>
                )
            })}
        </HStack>
    )
}

export default function StoryPage() {
    const [mobileDevice] = useMediaQuery('(max-width: 1000px)')

    return (
        <VStack justify='start' align='start'
            position='fixed' zIndex='2' bgColor='white'
            top='4em' right='0' left='0' p={mobileDevice ? '.7em' : '2em'}
        >
            <Stories />
        </VStack>
    )
}