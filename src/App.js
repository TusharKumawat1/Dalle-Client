import React from 'react'
import { logo } from './assets'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import { Createpost,Home } from './pages'
export default function App() {
  return (
    
     <BrowserRouter>
     <header className="w-full flex justify-between item-center bg-white sm:px-8 px-4 py-4 border--b-[#e6ebf4]">
      <Link to="/"><h2 className=' font-extrabold bg-black  rounded-md text-white px-4 py-2'>Artify</h2></Link>
      <Link to="/createpost" className='font-medium bg-[#6469ff] rounded-md text-white px-4 py-2'>Create</Link>
     </header>
    <main className='sm:p-8 px-4 py-8 w-full h-full bg-[#f9fafe] min-h-[calck(100vh-73px)]' >
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/createpost' element={<Createpost/>}/>
    </Routes>
    </main>
   
     </BrowserRouter>
  )
}
