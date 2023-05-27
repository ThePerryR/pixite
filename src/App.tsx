import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RoomProvider, useStorage, useMutation } from "../liveblocks.config";
import { LiveList } from '@liveblocks/client';

function App() {
  const [count, setCount] = useState(0)
  const pixels = useStorage((root) => root.pixels);
  const updatePixels = useMutation(({ storage }, pixels) => {
    console.log('setting to', pixels)
    storage.set('pixels', new LiveList(pixels))
  }, []);

  return (
    <div style={{ height: '100vh', width: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid black' }}>
        {pixels.map((row, i) => {
          return (
            <div key={`row-${i}`} style={{ display: 'flex', flexDirection: 'row' }}>
              {row.map((pixel, j) => {
                return (
                  <div
                    key={`${i}-${j}`}
                    style={{ height: '24px', width: '24px', backgroundColor: `#${pixel}`, border: '1px solid black' }}
                    onClick={() => {
                      const newPixels = [...pixels]
                      console.log(newPixels[i][j])
                      // set to random color
                      newPixels[i][j] === '000000' ? newPixels[i][j] = 'ffffff' : newPixels[i][j] = '000000'
                      updatePixels(newPixels)
                    }}
                  />
                )
              })}
            </div>
          )
        })}
      </div>
      <div style={{ display: 'flex' }}>
        <div
          onClick={() => {
            // set all to black
            const newPixels = [...pixels]
            for (let i = 0; i < newPixels.length; i++) {
              for (let j = 0; j < newPixels[i].length; j++) {
                newPixels[i][j] = '000000'
              }
            }
            updatePixels(newPixels)
          }}>
          Clear
        </div>
      </div>
    </div>
  )
}

export default App
