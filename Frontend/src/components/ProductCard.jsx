import { Box, Heading, Image, Text, HStack, IconButton, useToast , useColorModeValue, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, VStack, Input, useDisclosure, ModalCloseButton, ModalFooter, Button  } from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'; 
import {useProductStore} from '../store/product';
import { useState } from 'react';


const ProductCard = ({products}) => {
  const [updatedProduct, setUpdatedProduct] = useState(products);
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");
  const {deleteProducts, updateProduct} = useProductStore()
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()


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


  const handleUpdateProduct = async(pid, updatedProduct ) => {
    const {success, message} = await updateProduct(pid, updatedProduct);
    onClose();
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
          ${products.price}
        </Text>

        <HStack spacing={2}>
          <IconButton icon={<EditIcon/>} colorScheme='blue' onClick={onOpen} />
          <IconButton icon={<DeleteIcon/>} onClick={() => handleDeleteProducts(products._id)} colorScheme='red' />
        </HStack>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/> {/* yung dark bg effect */}
          <ModalContent>
            <ModalHeader> Update Product </ModalHeader>
            <ModalCloseButton />
            <ModalBody> 
              <VStack spacing={4} mb={4} >                   {/*⬇️ to display value sa fieldss */}
                <Input placeholder='Product Name' name='name' value={updatedProduct.name}
                  onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value})} 
                  />
                <Input placeholder='Price' name='price' type='number' value={updatedProduct.price}
                  onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value})}
                />
                <Input placeholder='Image URL' name='image' value={updatedProduct.image}
                  onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value})} 
                />
              </VStack>
            </ModalBody>
            <ModalFooter>

              <Button colorScheme='blue' mr={3} 
               onClick={ () => handleUpdateProduct(products._id, updatedProduct)}
              > Update </Button>

              <Button variant='ghost' onClick={onClose}> Cancel </Button>

            </ModalFooter>
          </ModalContent>



      </Modal>






    </Box>
  )
}

export default ProductCard