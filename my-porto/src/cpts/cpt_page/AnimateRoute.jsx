import React,{lazy,Suspense} from 'react';
import { Routes,useLocation,Route } from 'react-router-dom';
/*
import Services from './Service/Service';
import Calls from './Calls/Calls';
import Portofolios from './Portofolio/Portofolio';
import Aboutus from './Apropos/Aboutus';
import Blocs from './Bloc/Bloc';
import Home from './Home/Home';*/
import PgTransition from '../Petites_cpt/PageTransition/PgTransition';


const Services =lazy(()=>import("./Service/Service"))
const Calls =lazy(()=>import("./Calls/Calls"))
const Portofolios =lazy(()=>import("./Portofolio/Portofolio"))
const Aboutus =lazy(()=>import("./Apropos/Aboutus"))
const Blocs =lazy(()=>import("./Bloc/Bloc"))
const Home =lazy(()=>import("./Home/Home"))
//const Services =lazy(()=>import("./Service/Service"))

import { motion,AnimatePresence } from 'framer-motion';
function AnimateRoute() {
    
    const location = useLocation()
  return (
   
        <Suspense fallback ={()=><div>je suis en loding</div>}>
            <Routes  location={location} key={location.pathname} >
              <Route exact path="/" element={ <PgTransition><Home/></PgTransition>}></Route>
              <Route path="/About" element={<PgTransition><Aboutus/></PgTransition>}></Route>
              <Route path="/Services" element={<PgTransition><Services/></PgTransition>}></Route>
              <Route path="/Projets" element={<PgTransition><Portofolios/></PgTransition>}></Route>
              <Route path="/Blog" element={<PgTransition><Blocs/></PgTransition>}></Route>
              <Route path="/Calls" element={<PgTransition><Calls/></PgTransition>}></Route>   
        </Routes>
        </Suspense>
 
   
  )
}

export default AnimateRoute