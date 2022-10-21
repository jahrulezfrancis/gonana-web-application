import { IconButton, Icon, Input, useDisclosure, VStack, Stack, Textarea, Image, } from "@chakra-ui/react";
import { Modal, Button, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, } from '@chakra-ui/react'
import { FcAddImage } from "react-icons/fc"
import { useState, useEffect } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaTrash } from "react-icons/fa";



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
    const [preview, setPreview] = useState([])

    function HandlePost(e) {
        setPost(e.target.value)
    }

    function ImageHandler(e) {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
        } else {
            setImage(null)
        }
        console.log(e.target.files.length);
    }


    const [image, setImage] = useState('');

    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result)
            };
            reader.readAsDataURL(image);
        } else {
            setPreview(null)
        }

    }, [image]);


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
                <ModalContent w={'90vw'}>
                    <ModalHeader>Create New Post</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Textarea onChange={HandlePost} value={post} placeholder="What's on your mind" />
                        <Input onChange={ImageHandler} multiple
                            className="image-input"
                            display='none' type='file' accept="image/*" id="image-picker" />
                        <label style={{ padding: '.4em' }} htmlFor="image-picker">
                            <Icon cursor='pointer' fontSize='3em' as={FcAddImage} />
                        </label>
                        {
                            [preview].map((newImage) => {
                                return (
                                    (newImage) ?
                                        <VStack>
                                            <Icon cursor='pointer' onClick={() => { setImage(null) }} m='.2em' fill='red' color='red' as={FaTrash} />
                                            <Image key={newImage.name} width='210px' h='220px' p='1em' src={newImage} />
                                            <Image key={newImage.name} width='210px' h='220px' p='1em' src={newImage} />
                                        </VStack>
                                        : null
                                )
                            })
                        }

                        <p>{post}</p>
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
