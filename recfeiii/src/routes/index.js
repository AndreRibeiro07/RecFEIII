import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import Carrinho from '../pages/Carrinho'
import ProdutoContextProvider from '../context/Context'

const RouteList = () => (
          <BrowserRouter>
            <ProdutoContextProvider>
            <Header />
                <Routes>
                    <Route path="/" element={<Home /> } />
                    <Route path="/carrinho" element={<Carrinho /> } />
                </Routes>
            </ProdutoContextProvider>
            <Footer />
          </BrowserRouter>  
    );


// const RouteList = () => {
//   return (
//       <>
//         <BrowserRouter>
//           <ProdutoContextProvider>
//           <Header />
//               <Routes>
//                   <Route path = "/" element = {<Home /> } />
//                   <Route path = "/carrinho" element = {<Carrinho /> } />
//               </Routes>
//           </ProdutoContextProvider>
//           <Footer />
//         </BrowserRouter>  
//       </>
//   )
// }

export default RouteList
