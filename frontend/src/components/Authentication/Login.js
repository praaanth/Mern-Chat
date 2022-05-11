import {  VStack, Box, StackDivider, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()
    }
  return (
    <VStack spacing={4}>
         <FormControl id="email" isRequired>
   <FormLabel>
    Email
   </FormLabel>
   <Input placeholder="Enter Your Email" type="text"
   onChange={(e)=>setEmail(e.target.value)}
    />
   </FormControl>
   <FormControl id="password" isRequired>
   <FormLabel>
    Password
   </FormLabel>
   <InputGroup>
   <Input placeholder="Enter Your password" type={show ? 'text' : 'password'}
   onChange={(e)=>setPassword(e.target.value)}
   
    />
  <InputRightElement width="4.5rem">
    <Button h="1.75rem" size="sm" variantColor="blue"
    onClick={()=>setShow(!show)}
    >
        {show ? 'Hide' : 'Show'}
    </Button>
    </InputRightElement>
   
    </InputGroup>
   </FormControl>

   <Button variant="blue"
    onClick={submitHandler}
    style={{"marginTop": "20px"}}
   colorScheme="blue"
   w="100%"
    >
    Login
    </Button>

    <Button variant="solid"
    onClick={()=> {
        setEmail("guest@example.com");
          setPassword("123456");
    }}
    style={{"marginTop": "20px"}}
   colorScheme="red"
   w="100%"
    >
    Get Guest User Credentials
    </Button>
    </VStack>
  )
}

export default Login