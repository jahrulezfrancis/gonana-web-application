import { Box, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import Navigation, { BottomNav } from '../Header/Navigation';
import PostCard from '../Sections/Posts';
import StoryPage from '../Sections/Stories';

export default function HomePage() {
    return (
        <VStack>
            <Box h='100vh'>
                <Navigation />
                <Stack mt='3.5em' align='start' justify='flex-start'>
                    <StoryPage />
                </Stack>
                <Box>
                    <PostCard />
                </Box>
                <BottomNav />
            </Box>
        </VStack>
    )
}