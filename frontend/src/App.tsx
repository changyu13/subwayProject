import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './globals';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <BrowserRouter>
          <div>
            {/*<Header />*/}
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </BrowserRouter>
      </MantineProvider>
    </QueryClientProvider>
  )
}


export default App
