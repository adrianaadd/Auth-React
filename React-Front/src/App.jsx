
import router from "./router/index.jsx"
import './App.css'
import { RouterProvider } from 'react-router-dom'

function App() {

  return (
    <>
 <RouterProvider router={router}/>
    </>
  )
}

export default App
