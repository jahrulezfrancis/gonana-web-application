import { Box, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { BottomNav, NavigationTemplate } from '../Header/Navigation';


function CartMessage() {
    return (
        <Stack h='100vh' align='center' justify='center'>
            <Box borderBottom='3px solid red' m='2em'
                boxShadow='1px 2px 9px 1px rgba(98,125,82,0.75);
        -webkit-box-shadow: 1px 2px 9px 1px rgba(98,125,82,0.75);
        -moz-box-shadow: 1px 2px 9px 1px rgba(98,125,82,0.75);'
            >
                <VStack align='start' w='100%' p='1.5em' justify='center'>
                    <Heading fontSize='1.5em' >Empty Cart</Heading>
                    <Text fontSize='.8em'>
                        Your cart is empty, Your can add product to
                        your cart from Gonana Marketplace
                    </Text>
                </VStack>
            </Box>
        </Stack>
    )
}


export default function CartPage() {
    return (
        <Box h='100vh'>
            <VStack>
                <NavigationTemplate NavHeader='My Cart' headerColor='green' headerSize='1.7em' />
                <Stack h='100%' align='center' justify='center' m='2em'>
                    <CartMessage />
                </Stack>
                <BottomNav />
            </VStack>
        </Box>
    )
}