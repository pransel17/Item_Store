import { Box, Heading, Image, Text, HStack, IconButton, useToast , useColorModeValue   } from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'; 
import {useProductStore} from '../store/product';


const ProductCard = ({products}) => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");
  const {deleteProducts} = useProductStore()
  const toast = useToast()
  const handleDeleteProducts = async(pid) => {
    const {success, message} = await deleteProducts(pid)
    if (!success){
      toast({
        title: 'Error',
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true
      })
    } else{
      toast({
        title: "Success",
        description: message,
        status: "success",
        duration: 3000,
        isClosable: true, 
         })
    }
  }


  return (
    <Box
      shadow={'lg'}
      rounded={'lg'}
      overflow={'hidden'}
      transition={'all 0.3s'}
      _hover={{transform: "translateY(-5px)", shadow: "xl"}}
      bg={bg}
    > 
      <Image src={products.image} alt={products.name} h={48} w={'full'} objectFit='cover' />

      <Box p={4}> 

        <Heading as={'h3'} size={'md'} mb={2}> 
          {products.name}
        </Heading>

        <Text fontWeight={'bold'} fontSize={'xl'} color={textColor} mb={4}>
          {products.price}
        </Text>

        <HStack spacing={2}>
          <IconButton icon={<EditIcon/>} colorScheme='blue' />
          <IconButton icon={<DeleteIcon/>} onClick={() => handleDeleteProducts(products._id)} colorScheme='red' />
        </HStack>
      </Box>
    </Box>
  )
}

export default ProductCard