import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormComponent from './FormComponent'
import EmojiPicker from 'emoji-picker-react';
import Sidebar from './Sidebar'
import Chatroom from './Chatroom'


function App() {



  //const [state, setState] = useState('')
  //const [age, setAge] = useState(26)
  //const [isTeacher, setIsTeacher] = useState(true)
  //const [count, setCount] = useState(0)
  //const [count2,setCount2] =useState(0)

  //const handleCount = () => {
  // setCount(count + 1) //ja povikuva count funkcijata samo


  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')

  const [roomId, setRoomId] = useState('General')

  const [chats, setChats] = useState([
    { roomId: 'General', title: "🎉 You're looking at general channel", messages: [''] },
    { roomId: 'Learning React', title: '👋 Welcome to our react.js channel', messages: [''] },
    {
      roomId: 'Random', title: '🤗 Post your opinion here,what do you think',
      messages: [
        {
          username: 'Igor Tasevski',
          timestamp: '15:28',
          value: 'Welcome',
        },
      ]
    }






  ])

  return (
    <div>

      {fullName.length < 4 ? (
        <FormComponent setUsername={setUsername} setFullName={setFullName} />
      ) : (
        <div>
          <h2>{username} </h2>
          <Sidebar roomId={roomId} setRoomId={setRoomId}  />
          <Chatroom roomId={roomId} chats={chats}/>
        </div>
      )}




      {/*<button onClick={()=>setAge(28)} >{age}</button>  on button click change the value from the initial state 26 to 28*/}
      {/*<button onClick={()=>setAge(age+1)} >{age}</button>  on button click change the age value from initial state plus 1 */}
      {/*<button onClick={handleCount}>Current count: {count}</button> {/*in this case both buttons will update the same value */}
      {/*<button onClick = {()=>setCount2(count2+2)}>Current count +2: {count2}</button> {/*in this case both buttons will update the same value because the use the same state*/}






    </div>
  )
}


export default App
