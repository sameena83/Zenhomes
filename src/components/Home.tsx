import React from 'react'

import Box from '@mui/material/Box';
import CardContract from './cards/CardContract'
import CardLaws from './cards/CardLaws'
import CardMaintenance from './cards/CardMaintenance';
import CardStats from './cards/CardStats';
import CardEvents from './cards/CardEvents';
import Sidebar from './Sidebar';
import CardFinancial from './cards/CardFinancial';
import SimpleBottomNavigation from './BottomBar';

export default function Home() {
  return (
    <div>
      <Sidebar/>
        {/* <Box sx={{display: {xs: 'none', sm:"grid"}, gap:'2rem', justifyContent:'center', gridTemplateColumns:'auto auto', marginTop: '5%'}}> */}
        <Box sx={{display:"grid", margin: 'auto', gridTemplateColumns:'auto auto', marginTop: '5%'}}>
          <CardContract/>
          <CardLaws/>
          <CardMaintenance/>
          <CardStats/>
          <CardEvents/>
          <CardFinancial/>
          <SimpleBottomNavigation/>
        </Box>
    </div>
  )
}
