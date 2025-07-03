import { Box, Image  } from '@chakra-ui/react';


const ProductCard = ({products}) => {
  return (
    <Box
      shadow={'lg'}
      rounded={'lg'}
      overflow={'hidden'}
      transition={'all 0.3s'}
      _hover={{transform: "translteY(-5px", shadow: "xl"}}
    > 
      <Image src={products.image} alt={products.name} h={48} w={full} objectFit='cover' />
    </Box>
    
  )
}

export default ProductCard