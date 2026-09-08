import { Outlet } from 'react-router'
import Menu from './components/Menu'
import { NumberContextProvider } from './context/NumberContext'

function App() {
  return (
    <NumberContextProvider>
      <Menu />
      <Outlet />
    </NumberContextProvider>
  )
}

export default App