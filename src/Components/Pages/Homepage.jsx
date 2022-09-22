import { Box } from '@chakra-ui/react';
import React from 'react';
import Navigation, { BottomNav } from '../Header/Navigation';

export default function HomePage() {
    return (
        <Box>
            <Navigation />
            <BottomNav />
        </Box>
    )
}