import { Container, Heading, Box, useColorModeValue, VStack, Input, Button } from "@chakra-ui/react"
import { useState } from "react"

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  })



  const handleAddProdcut = () => {
    console.log(newProduct);
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
              onChange={(e) => setNewProduct({ ...newProduct, name: e.targetvalue})}
  
            />
  
            <Input 
              placeholder={"Price"}
              name="price"
              type="number"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.targetvalue})}
  
            />
  
            <Input 
              placeholder={"Image URL"}
              name="image"
              type="number"
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.targetvalue})}
            />

            <Button colorScheme="blue" onClick={handleAddProdcut} w={"full"}>
              Add Product
            </Button>



          </VStack>
  
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage