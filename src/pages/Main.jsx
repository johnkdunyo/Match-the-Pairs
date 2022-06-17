import React, {useState, useEffect} from 'react'
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

    const [cards, setCard] = useState(([...images, ...images]))

    const [totalClicks, setTotalClicks] = useState(0);
    const [openCards, setOpenCards] = useState([]); //card clicked

    const [matchedCards, setMatchedCards] = useState([]);
  

    console.log(cards)

    const onClickEndGame = () =>{
        setTotalClicks(0)
    }

    const onClickResetGame = () => {
        setTotalClicks(0)
    }

    const handleImageClick = (index) => {
        console.log('main handling image click at index: ', index)
        if(openCards.length===2){
            console.log('hhh')
            if(cards[openCards[0]].id===cards[openCards[1]].id){
                setMatchedCards([...openCards])
                setOpenCards([])
            }else{
                setOpenCards([index])
            }
            
        }else{
            setOpenCards([index, ...openCards.slice(0, 1)])
        }
        
        
        
    }

    console.log('cards index open: ',openCards)
    console.log('mathced cards: ', matchedCards)
 
    const checkMatcth = ()=>{

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
                        onCardClick={handleImageClick}
                        setTotalClicks={setTotalClicks} 
                        matchedCards={matchedCards}
                        openCards={openCards}
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