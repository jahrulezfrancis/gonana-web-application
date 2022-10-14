import { IconButton, Icon, Input, useDisclosure, Stack, Textarea, Image, } from "@chakra-ui/react";
import { Modal, Button, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, } from '@chakra-ui/react'
import { FcAddImage } from "react-icons/fc"
import { useState } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export function CreatePost() {
    const notify = () => toast.info("Your post is now saved as draft", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [post, setPost] = useState('')
    const [image, setImage] = useState(null);
    const fileHandler = event => {
        setImage(event.target.files[0].name)
        console.log(event.target.files)
    }

    return (
        <>
            <IconButton bg='transparent' onClick={onOpen} >
                <Icon boxSize='1.5em' as={MdOutlineAddCircleOutline} />
            </IconButton>

            <Modal isOpen={isOpen} onClose={() => {
                onClose()
                notify()
            }} >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create New Post</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Textarea placeholder="What's on your mind" />
                        <Input onChange={fileHandler} className="image-input" display='none' type='file' accept="image/*" id="image-picker" />
                        <label style={{ padding: '.4em' }} htmlFor="image-picker">
                            <Icon cursor='pointer' fontSize='3em' as={FcAddImage} />
                        </label>
                       <Image src={image} />
                        <Stack>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Publish
                            </Button>
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <ToastContainer />
        </>
    )
}