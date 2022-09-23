import { Box } from '@chakra-ui/react';
import React from 'react';
import { BottomNav, NavigationTemplate } from '../Header/Navigation';



export default function Orders() {
    return (
        <Box>
             <NavigationTemplate NavHeader='Orders' />
            <BottomNav />
        </Box>
    )
}