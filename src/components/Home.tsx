import React from 'react'

import Box from '@mui/material/Box';
import CardContract from './cards/CardContract'
import CardLaws from './cards/CardLaws'
import CardMaintenance from './cards/CardMaintenance';
import CardStats from './cards/CardStats';

export default function Home() {
  return (
    <div>
        <Box sx={{display:"grid", gap:'2rem', justifyContent:'center', gridTemplateColumns:'auto auto', marginTop: '5%'}}>
          <CardContract/>
          <CardLaws/>
          <CardMaintenance/>
          <CardStats/>
        </Box>
    </div>
  )
}
