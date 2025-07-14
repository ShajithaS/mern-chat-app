import React , {useState} from 'react'
import Sidebar from '../Components/Sidebar'
import ChatContainer from '../Components/ChatContainer'
import RightSideBar from '../Components/RightSideBar'

const HomePage = () => {
    const [selectedUser, setSelectedUser] = useState(false)
  return (
    // Applies a border, full width, full screen height, and padding on small screens (15% horizontal, 5% vertical)
    <div className='border w-full h-screen sm:px-[15%] sm:py-[5%]'>
        
    <div className={`backdrop-blur-xl border-2 border-gray-600 rounded-2x1
overflow-hidden h-[100%] grid grid-cols-1 relative ${selectedUser?
'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]' : 'md:grid-cols-2'}`}>
    {/*A div with a strong background blur, gray border, rounded corners, full height, single-column grid layout, hidden overflow, and relative positioning*/}
        <Sidebar selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
        <ChatContainer selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
        <RightSideBar selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
    </div> 
    </div>
  )
}

export default HomePage
