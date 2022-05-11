import React from 'react'
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react'
import Signup from '../components/Authentication/Signup'
import Login from '../components/Authentication/Login'
function Home() {
  return (
    <>
    
    <Container>
    <Box 
    className="Box"
    d="flex"
    justifyContent="center"
    p={3}
    bg={"white"}
    w="100%"
    m="40px 0 15px 0"
    borderRadius="lg"
    >
      <Text fontSize="4xl" fontFamily="work sans">
        Talk-A-Tive
      </Text>
    </Box>

    <Box 
    
    p={4}
    bg={"white"}
    w="100%"
    m="20px 0 15px 0"
    borderRadius="lg"
    borderWidth="1px"
    className="Tabs"
    >
    <Tabs variant='soft-rounded' >
  <TabList mb="1em"
  d="flex"
  justifyContent="space-between"
  >
    <Tab width="50%">Sign Up</Tab>
    <Tab width="50%">Login</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Signup/>
    </TabPanel>
    <TabPanel>
      <Login/>
    </TabPanel>
  </TabPanels>
</Tabs>

    </Box>
    </Container>
    </>
  )
}

export default Home
