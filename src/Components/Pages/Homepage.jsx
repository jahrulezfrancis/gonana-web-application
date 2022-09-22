import { Box, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import Navigation, { BottomNav } from '../Header/Navigation';
import { Stories } from '../Sections/Stories';

export default function HomePage() {
    return (
        <VStack>
            <Box>
                <Navigation />
                <Stack mt='3.5em' align='start' justify='flex-start'>
                    <Stories />
                </Stack>
                <BottomNav />
            </Box>
        </VStack>
    )
}