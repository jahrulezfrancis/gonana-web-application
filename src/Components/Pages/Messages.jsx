import { Box } from '@chakra-ui/react';
import React from 'react';
import { BottomNav, NavigationTemplate } from '../Header/Navigation';

export default function MessagesPage() {
    return (
        <Box>
            <NavigationTemplate NavHeader='Conversations' headerSize='1.5em' />
            <BottomNav />
        </Box>
    )
}