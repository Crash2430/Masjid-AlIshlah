import React from 'react';
import Home from './pages/Home';
import { Router, Route, Routes} from 'react-router';
import RootLayout from './layout/root-layout';
import JadwalSholat from './pages/JadwalSholat';

function App() {
  return (
    <Routes>
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home />} />
        <Route path='/jadwal-sholat' element={<JadwalSholat/>}/>
        </Route>
      </Routes>
  );
}

export default App;