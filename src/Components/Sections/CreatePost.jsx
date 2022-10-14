import { IconButton, Icon, Input, useDisclosure, Alert, AlertIcon, AlertTitle, AlertDescription, Textarea } from "@chakra-ui/react";
import { Modal, Button, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, } from '@chakra-ui/react'
import { FcAddImage } from "react-icons/fc"
import {MdOutlineAddCircleOutline} from "react-icons/md"




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


export function CreatePost() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <IconButton bg='transparent' onClick={onOpen} >
                <Icon boxSize='1.5em' as={MdOutlineAddCircleOutline} />
            </IconButton>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create New Post</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Textarea placeholder="What's on your mind" />
                        <Input display='none' placeholder="Choose file" type='file' accept="image/*" id="image-picker" />
                        <label style={{ padding: '.4em' }} for='image-picker' >
                            <Icon fontSize='3em' as={FcAddImage} />
                        </label>
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