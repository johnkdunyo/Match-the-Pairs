import React, {useState} from 'react'
import { 
    Box, 
    Container, 
    Heading,
    Text,
    SimpleGrid, 
    Spacer,
    Flex,
    Button
} from '@chakra-ui/react'
import Header from '../components/Header'
import ImageCard from '../components/ImageCard'


const Main = () => {

    const images = [
        { id: 1, tag: 1,  url: 'assets/ghana.png' },
        {id: 2, tag: 2,url: 'assets/usa.png' },
        { id: 3, tag: 1, url: 'assets/ghana.png' },
        {id: 4, tag: 2, url: 'assets/usa.png' },
    ]

    const [totalClicks, setTotalClicks] = useState(0);

    const onClickEndGame = () =>{

    }

    const onClickResetGame = () => {
        setTotalClicks(0)
    }


  return (
   <Box minHeight="100vh" display="flex" flexDir="column">
    <Header />
    <Container maxW="xl" mt="95px" flex={1}>
        <Box textAlign="center">
            <Heading as="h4" size="4xl">
                Match-the-Flips
            </Heading>
            <Text fontSize="lg" fontWeight="semibold" mt={2}>
                Got what it takes to win? 🤔  <br/> Let's gooo 🚀
            </Text>
        </Box>

        {/* top bar for score */}
        <Flex mt='60px'>
            <Box p='4'  borderWidth='1px' borderRadius='lg'>
                <Text>Pairs Matched</Text>
                <Text>0/8</Text>
            </Box>
            <Spacer />
            <Box p='4'  borderWidth='1px' borderRadius='lg'>
                <Text>Total Moves</Text>
                <Text>{totalClicks}</Text>
            </Box>
        </Flex>

        <Box borderWidth='1px' borderRadius='lg' overflow='hidden' mt='10px'>
            <SimpleGrid  m="10px" columns={4} spacingX='15px' spacingY='15px'>
                {images.map(image=>(
                    <ImageCard key={image.id} image={image} setTotalClicks={setTotalClicks} />
                ))}
            </SimpleGrid>
        </Box>
        
        <Flex mt='10px'>
            <Button
                size='md'
                height='48px'
                width='200px'
                onClick={onClickResetGame}
            >
            Reset Game
            </Button>
            <Spacer />
            <Button
                size='md'
                height='48px'
                width='200px'
                onClick={onClickEndGame}
            >
            End Game
            </Button>
        </Flex>
        
    </Container>


   </Box>
  )
}

export default Main