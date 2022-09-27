import { Box, Text, Image, HStack, Avatar, VStack, Icon } from "@chakra-ui/react";
import { Post } from "../DataBase/Post";
import { MdFavoriteBorder, MdModeComment, MdShare } from "react-icons/md"



function CardTemplate(props) {
    const property = {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Modern home in city center in the heart of historic Los Angeles',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,
    }

    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <HStack p='1em'>
                <Avatar name={props.userName} src="" />
                <VStack spacing='-.1em'>
                    <Text>{props.userName}</Text>
                    <Text>{new Date().toLocaleDateString()}</Text>
                </VStack>
            </HStack>
            <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                noOfLines={2}
            >
                {props.body}
            </Box>
            <Image src={property.imageUrl} alt={property.imageAlt} />

            <Box p='6'>
                <Box display='flex' mt='2' alignItems='center'>
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                        <HStack spacing='3em'>
                            <Icon as={MdFavoriteBorder} w={7} height={7} />
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
        <Box>
            {
                Post.map((element) => {
                    return <CardTemplate userName='Jahrulez' title={element.title} body={element.body} key={element.id} />
                })
            }
        </Box>
    )
}

