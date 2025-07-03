import { Container, VStack, Text, SimpleGrid, Center } from '@chakra-ui/react';
import { useEffect } from 'react';
import {Link as Link } from "react-router-dom"; // not sa chakra, sa router te
import { useProductStore } from "../store/product"; // adjust the path if needed
import ProductCard from "../components/ProductCard"; 


const HomePage = () => {

  const {fetchProducts, products} = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products", products);



  return (
    <Container maxW={"container.xl"} py={12}> {/* py = padding on the y-axis brurr */}
      <VStack spacing={8}>
        <Text             
          bgGradient='linear(to-r, cyan.400, blue.500)'
          bgClip='text' // gradien sa text
          fontSize={{base: 22 , sm: 28 }} // base = normal screen, sm = smallscreen to make it responsive 
          fontWeight='bold'
          textTransform={"uppercase"}
          textAlign={"center"}
          > Current Products 🐢
        </Text>

        <SimpleGrid
          columns={{ /// SIZING FFOR RESPONSIVENENNENES 😊
            base: 1, // default o smallest
            md: 2, // medium
            lg: 3 // largeu
          }}
          spacing={10}
          w={'full'}
        >
          {products.map((products)=>{
            <ProductCard key={products._id} products={products} />
          })}

        </SimpleGrid>


        <Text fontSize={'xl'} textAlign={'center'} fontWeight={'bold'} color={'gray.500'}>
          No products found 😔
          <Link to={"/create"}> 
            <Text as={'span'} color={'blue.500'} _hover={{ textDecoration: 'underline'}}>
              Create a Product
            </Text>          
          </Link>
        </Text>


      </VStack>



    </Container>

 

  )
}

export default HomePage