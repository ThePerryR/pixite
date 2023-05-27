import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RoomProvider, useStorage } from "../liveblocks.config";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RoomProvider id="main-room" initialPresence={{}} initialStorage={{pixels: []}}>
      <App />
    </RoomProvider>
  </React.StrictMode>,
)
