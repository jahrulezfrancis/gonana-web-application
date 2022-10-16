import React from 'react';
import { Box, HStack, Avatar, useMediaQuery, } from '@chakra-ui/react';
import { StoryDB } from '../DataBase/Stories';



function StoryTemp(props) {
    return (
        <Avatar src={props.Avatar} />
    )
}


export function Stories() {
    const [onMobile] = useMediaQuery('(max-width: 1000px)')
    return (
        <HStack position='fixed' w='100vw' overflowX='auto' mt={onMobile ? '.5em' : '2.2em'} bg='#ffffff' p='1em' zIndex='2'>
            {StoryDB.map((element) => {
                return (
                    <Box key={element.id}>
                        <StoryTemp Avatar={element.post_url} />
                    </Box>
                )
            })}
        </HStack>
    )
}

