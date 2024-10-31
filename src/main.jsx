import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryclient = new QueryClient({
  defaultOptions:{
    queries:{
      retry:1,
      refetchOnWindowFocus:false,
      staleTime:1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
    }
  }
})

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <QueryClientProvider client={queryclient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>,
)
