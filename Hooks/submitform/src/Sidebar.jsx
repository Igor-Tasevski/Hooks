import React from 'react'

const Sidebar = ({roomId, setRoomId}) => {
    return (
        <div>

            <h2>Choose your Channels 🙋</h2>
            <div style={{ display: 'flex', width: '55%', flexDirection: 'row' }}>
                <button onClick={() => setRoomId('General')}>General {roomId === 'General' && '✅'}</button>
                <button onClick={() => setRoomId('Learning React')}>Learning React{roomId === 'Learning React' && '✅'}</button>
                <button onClick={() => setRoomId('Random')}>Random {roomId === 'Random' && '✅'}</button>
            </div>

        </div>
    )
}

export default Sidebar