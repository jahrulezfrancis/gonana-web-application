import { IconButton, Icon, Input, useDisclosure, Alert, AlertIcon, AlertTitle, AlertDescription, Textarea } from "@chakra-ui/react";
import { Modal, Button, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, } from '@chakra-ui/react'
import { IoRocketOutline } from "react-icons/io5";




function DeleteWarning() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Alert isOpen={isOpen} status='error' onClose={onClose}>
                <AlertIcon />
                <AlertTitle>Your browser is outdated!</AlertTitle>
                <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
            </Alert>
            <Button onClick={onOpen}>Alert Check</Button>
            
        </>
    )
}

function FilePicker(){
    
        <Input placeholder="Choose file" type='file' />
}

export function CreatePost() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <IconButton onClick={onOpen} >
                <Icon as={IoRocketOutline} />
            </IconButton>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create New Post</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Textarea placeholder='Post Body' />
                       <Button onClick={() => { return  <Input placeholder="Choose file" type='file' /> }}>Select File</Button>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Publish
                        </Button>
                        <Button color='red' variant='ghost' onClick={() => {
                            return (<DeleteWarning />)
                        }}>Discard</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}