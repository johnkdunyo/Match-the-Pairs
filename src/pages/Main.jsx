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
import ScoreBar from '../components/ScoreBar'

import { shuffleFisherYates } from '../utils/utils'

const Main = () => {

    const images = [
        {id: 1, url: 'assets/ghana.png' },
        {id: 2, url: 'assets/usa.png' },
        {id: 3, url: 'assets/baby.jpeg' },
        {id: 4, url: 'assets/africafam.jpeg' },
        {id: 5, url: 'assets/love.jpeg' },
        {id: 6, url: 'assets/good.jpeg' },
        {id: 7, url: 'assets/art.jpeg'},
        {id: 8, url: 'assets/giraffe.jpeg'}
    ]

    const [cards, setCard] = useState(shuffleFisherYates([...images, ...images]))

    const [totalClicks, setTotalClicks] = useState(0);
  

    // console.log(arr2)

    const onClickEndGame = () =>{
        setTotalClicks(0)
    }

    const onClickResetGame = () => {
        setTotalClicks(0)
    }

    const handleImageClick = () => {
        console.log('hdnakibg on image click')
    }


  return (
   <Box minHeight="100vh" display="flex" flexDir="column">
    <Header />
    <Container maxW="xl" mt="95px" flex={1}>
        <Box textAlign="center">
            <Heading as="h4" size="4xl">
                Match-the-Pairs
            </Heading>
            <Text fontSize="lg" fontWeight="semibold" mt={2}>
                Got what it takes to win? 🤔  <br/> Let's gooo 🚀
            </Text>
        </Box>

        
        <ScoreBar totalClicks={totalClicks} />

        <Box borderWidth='1px' borderRadius='lg' overflow='hidden' mt='10px'>
            <SimpleGrid  m="10px" columns={4} spacingX='15px' spacingY='15px'>
                {cards.map((card, index)=>(
                    <ImageCard 
                        key={index} 
                        card={card} 
                        index={index}
                        onClick={handleImageClick}
                        setTotalClicks={setTotalClicks} 
                    />
                ))}
            </SimpleGrid>
        </Box>
        







        <Flex mt='10px'>
            <Button size='md' height='48px' width='200px' onClick={onClickResetGame}>
                Reset Game
            </Button>
            <Spacer />
            <Button size='md' height='48px' width='200px' onClick={onClickEndGame}>
                End Game
            </Button>
        </Flex>
        
    </Container>


   </Box>
  )
}

export default Main