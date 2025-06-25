import { Button, Container, Flex, HStack, Text, useColorMode,  } from '@chakra-ui/react'
import { Link } from "react-router-dom"; // a react router link, changes url w/ reloading page unlike html faster siya
import { CiSquarePlus } from "react-icons/ci";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";


const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  
  return (

    <Container maxW= {"1140px"} px={4} >

      <Flex 
        h={16} 
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row"
        }}
        >
          
          <Text
            bgGradient='linear(to-r, cyan.400, blue.500)'
            bgClip='text' // gradien sa text
            fontSize={{base: 22 , sm: 28 }} // base = normal screen, sm = smallscreen to make it responsive 
            fontWeight='bold'
            textTransform={"uppercase"}
            textAlign={"center"}
          >

            <Link to={"/"} > Product Store 🛒 </Link>

          </Text>

          <HStack spacing={2} alignItems={"center"}>
            <Link to={"/create"}>
              <Button>
                <CiSquarePlus fontSize={20} />
              </Button>
            </Link>
            <Button onClick={ toggleColorMode }>
              {colorMode === "light" ? <IoMoon /> : <LuSun size="20"/>}

            </Button>




          </HStack>
         
        


      </Flex>
    
    
    </Container>
    
  )
}

export default Navbar