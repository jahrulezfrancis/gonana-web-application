import { Box, Text, Image, HStack, Avatar, VStack, Icon, } from "@chakra-ui/react";
import { useState } from "react";
import { MdFavoriteBorder, MdModeComment, MdShare } from "react-icons/md"
import { ActiveUsers } from "../DataBase/Users";


function CardTemplate(props) {
    const property = {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'Rear view of modern home with pool',
    }

    const [likes] = useState(20)


    const [like, setlike] = useState(false);
    const HandleLikes = () => {
        (!like ? setlike(true) : setlike(false))
    }
    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' m='1em .5em' p='.5em' top={"lg"}>
            <HStack p='1em'>
                <Avatar name={props.Avatar} src="" />
                <VStack align='start' spacing='-.1em'>
                    <Text>{props.userName}</Text>
                    <Text>{new Date().toLocaleDateString()}</Text>
                </VStack>
            </HStack>
            <Box p='0em 1em'
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                noOfLines={3}
            >
                {props.body}
            </Box>
            <Image src={property.imageUrl} alt={property.imageAlt} />

            <Box p='6'>
                <Box display='flex' mt='2' alignItems='center'>
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                        <HStack spacing='3em'>
                            <Icon fill={like ? "red" : 'currentColor'} onClick={HandleLikes} as={MdFavoriteBorder} w={7} height={7} />
                            <Text>
                                {like ? likes + 1 : likes}
                            </Text>
                            <Icon as={MdModeComment} w={7} height={7} />
                            <Icon as={MdShare} w={7} height={7} />
                        </HStack>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}



export default function PostCard() {
    return (
        <HStack wrap='wrap' justify='center' mt='8em'>
            {
                ActiveUsers.map((element) => {
                    return <Box key={element.id}>
                        <CardTemplate Avatar={element.picture} userName={element.name} title={element.title} body={element.postBody} />
                    </Box>

                })
            }
        </HStack>
    )
}

