import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <div>
          {/*<Header />*/}
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </MantineProvider >
  )
}


export default App
