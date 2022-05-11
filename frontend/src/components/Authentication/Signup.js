import React, { useState } from 'react'
import {  VStack,  FormControl, FormLabel, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import {axios} from 'axios'
import { useToast } from '@chakra-ui/react'
// import { set } from 'express/lib/response'
import { useNavigate } from 'react-router-dom'
function Signup() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [show, setShow] = useState(false)
    const [pic, setPic] = useState()
    // eslint-disable-next-line no-unused-vars
    const [loading, setLoading] = useState(false)
    const toast = useToast()
    const navigate = useNavigate();

    const postDetails = (pics) => {
        setLoading(true)
        if(pic===undefined){
            toast({

                title: 'Please upload a profile picture',
                description: '',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: 'top-right',
            });
            return;
          }
          if(pic.type==="image/jpeg"||pic.type==="image/png" || pic.type==="image/jpg"){

           const data = new FormData()
            data.append('file', pics);
            data.append('upload_preset', "chat-app");
            data.append('cloud_name', "dk1wyzhyd");
            fetch("https://api.cloudinary.com/v1_1/dk1wyzhyd/image/upload", {
                method: "post",
                body: data
            })

                .then(res => res.json())
                .then(data => {
                    console.log(data) 
                   
                    setPic(data.url.toString())
                    setLoading(false)
                }
                )
                .catch(err => {
                    console.log(err)  
                    setLoading(false)
                }
                )
        }else{
          toast({
            title: 'Please upload a valid image',
            description: '',
            status: 'warning',
            duration: 5000,
            isClosable: true,
            position: 'top-right',
          });
          setLoading(false)
          return ;
        }
      
        }
    

  
    const submitHandler = async () => {
       
        setLoading(true)
        if(!name || !email || !password || !confirmPassword){
            toast({
                title: 'Please fill all the fields',
                description: '',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: 'top-right',
    }
            );
            setLoading(false)
            return;
        }
        if(password !== confirmPassword){
            toast({
                title: 'Passwords do not match',  
                description: '',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: 'top-right',
            });
            setLoading(false)
            return;
        }
        // api request to store in database
        try{
          // set headers for request and set content type to form data
          const config = {
           
            headers: {
              'Content-Type': 'application/json'
            },
          };
          const {data}= await axios.post('/api/user', {name,email,password,pic}, config);
          toast({
            title: 'User created successfully',
            description: '',
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: 'top-right',
          });
          setLoading(false)
        // set the user info in localStorage
        localStorage.setItem('userInfo', JSON.stringify(data))

       navigate('/data');  
        }
        catch(err){
          toast({
            title: 'error occured',
            description: err.response.data.message,
            status: 'error',
            duration: 5000,
            isClosable: true,
            position: 'top-right',
          });

          setLoading(false)
        }
    }

        




  return (
    <VStack
        spacing={4}
  >
   <FormControl id="first-name" isRequired>
   <FormLabel>
    Name
   </FormLabel>
   <Input placeholder="Enter Your Name" type="text"
   onChange={(e)=>setName(e.target.value)}
    />
   </FormControl>
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
    <Button h="1.75rem" size="sm" 
    onClick={()=>setShow(!show)}
    >
        {show ? 'Hide' : 'Show'}
    </Button>
    </InputRightElement>
   
    </InputGroup>
   </FormControl>
   <FormControl id="password" isRequired>
   <FormLabel>
    Confirm Password
   </FormLabel>
   <InputGroup>
   <Input placeholder="Enter Your password" type={show ? 'text' : 'password'}
   onChange={(e)=>setConfirmPassword(e.target.value)}
   
    />
  <InputRightElement width="4.5rem">
    <Button h="1.75rem" size="sm" 
    onClick={()=>setShow(!show)}
    >
        {show ? 'Hide' : 'Show'}
    </Button>
    </InputRightElement>
   
    </InputGroup>
   </FormControl>
   <FormControl id="pic" >
   <FormLabel>
   Upload Your Picture
   </FormLabel>
   <Input  type="file"
   p={1.5}
   onChange={(e)=>postDetails(e.target.files[0])}
    />
   </FormControl>
  
  <Button 
    onClick={submitHandler}
    style={{"marginTop": "20px"}}
   colorScheme="blue"
    // isLoading={loading}
   w="100%"
    >
    Sign Up
    </Button>
  </VStack>
  )
}



export default Signup