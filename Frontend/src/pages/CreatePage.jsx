import { Container, Heading, Box, useColorModeValue, VStack, Input, Button, useToast } from "@chakra-ui/react"
import { useState } from "react"
import { useProductStore } from "../store/product"

const CreatePage = () => {
  //NOTE: W/REACT STATE FORMAT: const [stateValue, setStateValue] = useState(initialValue);

  const [newProduct, setNewProduct] = useState({ // using REact state, newProduct is like a box that holds my form data (name, price, image),setNewProduct to update that box
    name: "",
    price: "",
    image: "",
  })
  const toast = useToast()


  const {createProduct} = useProductStore()

  const handleAddProduct = async() => {
    const {success, message} = await createProduct(newProduct)
    if (!success){
      toast({
        title: "error",
        description: message,
        status: "error",
        isClosable: true,            
      })
    } else{
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true, 
      })
    }
    setNewProduct({name: "", price: "", image: ""})
  }


  // UI
  return (
    <Container maxW={"container.sm"}> 
      <VStack spacing= {8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8} >
          Create new Product
        </Heading>
    
        <Box
          w={"full"} bg={useColorModeValue("white", "gray.800")}
          p={6} rounded={"lg"} shadow={"md"}
        >
          <VStack spacing={4}>
            <Input 
              placeholder={"Product Name"}
              name="name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value})}
  
            />
  
            <Input 
              placeholder={"Price"}
              name="price"
              type="number"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value})}
  
            />
  
            <Input 
              placeholder={"Image URL"}
              name="image"
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value})}
            />

            <Button colorScheme="blue" onClick={handleAddProduct} w={"full"}>
              Add Product
            </Button>



          </VStack>
  
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage