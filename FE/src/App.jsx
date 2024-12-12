import Layout from './Components/Layout'
import UserData from './Context/MyContext'
import {Routes, Route} from 'react-router-dom'

function App() {

 
  return (
    <>
     <UserData>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route />
          <Route />
        </Route>
      </Routes>
     </UserData>
    </>
  )
}

export default App
