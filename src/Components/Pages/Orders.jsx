import React from 'react'
import { Box, VStack, Heading, Text, Stack, Tabs, TabList, Tab, TabPanels, TabPanel, Flex, useMediaQuery } from '@chakra-ui/react'
import { BottomNav, NavigationTemplate } from '../Header/Navigation'



function OrderMessageTemplate(props) {
    return (
        <Box borderBottom='3px solid green'
            boxShadow='1px 2px 9px 1px rgba(98,125,82,0.75);
    -webkit-box-shadow: 1px 2px 9px 1px rgba(98,125,82,0.75);
    -moz-box-shadow: 1px 2px 9px 1px rgba(98,125,82,0.75);'
        >
            <VStack align='start' w='100%' p='1.5em'>
                <Heading fontSize='1.5em'>{props.messageHeading}</Heading>
                <Text fontSize='.8em'>
                    {props.messageBody}
                </Text>
            </VStack>
        </Box>
    )
}

function MyOrderMessage() {
    return (
        <OrderMessageTemplate messageHeading='Empty Order list' messageBody='Your cart is empty, Your can add product to
        your cart from Gonana Marketplace' />
    )
}

export function EmptyOrderMessage() {
    return (
        <OrderMessageTemplate messageHeading='Empty recieved orders' messageBody='Your cart is empty, Your can add product to
        your cart from Gonana Marketplace' />
    )
}

function OrderTab() {
    const [onMobile] = useMediaQuery('(max-width: 1000px)')
    return (
        <Box mt={onMobile ? '5em' : '6em'} position='fixed' w='100vw'>
            <Tabs size='lg' variant='line' isFitted>
                <TabList pt={onMobile ? '0em' : '.2em'}>
                    <Flex direction='row' w='100%'>

                        <Tab>My Orders</Tab>
                        <Tab>Received Orders</Tab>
                    </Flex>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <VStack h='50vh' align='center' justify='center'>
                            <MyOrderMessage />
                        </VStack>
                    </TabPanel>
                    <TabPanel>
                        <VStack h='50vh' align='center' justify='center'>
                            <EmptyOrderMessage />
                        </VStack>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default function OrdersPage() {
    return (
        <Box>
            <NavigationTemplate NavHeader='My Orders' headerColor='green' headerSize='1.7em'/>
            <Stack>
                <OrderTab />
            </Stack>
            <Stack h='100vh' align='center' justify='center'>
            </Stack>
            <BottomNav />
        </Box>
    )
}