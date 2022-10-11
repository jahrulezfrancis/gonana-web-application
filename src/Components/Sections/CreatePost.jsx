import { IconButton, Icon, Input, useDisclosure } from "@chakra-ui/react";
import { Modal, Button, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, } from '@chakra-ui/react'
import { IoRocketOutline } from "react-icons/io5";


export function CreatePost() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
        <IconButton>

            <Icon as={IoRocketOutline} onClick={onOpen} />
        </IconButton>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create New Post</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input type='text' />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Publish
                        </Button>
                        <Button color='red' variant='ghost' onClick={onClose}>Discard</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}