import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Chat() {
  const [chats, setChats] = useState([])
  const fetchData= async ()=> {
    const {data} = await axios.get('/api/user')
    console.log(data);
    setChats(data);
  }


   useEffect(() => {
    fetchData();
  }
  , [])
  return (
    <div>
     { chats.map((c)=>(
        <div>
        {c.chatName}
        </div>
      ))
      }
     
    </div>
  )
}

export default Chat
