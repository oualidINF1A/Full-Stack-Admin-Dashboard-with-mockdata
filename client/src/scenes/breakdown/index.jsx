import React from 'react'
import {Box} from '@mui/material'
import BreakdownChart from 'components/BreakdownChart'
import Header from 'components/Header'

const Breakdown = () => {
  return (
    <Box mt="1.5rem 2.5rem">
        <Header title="Breakdown" subtitle="Breakdown of Sales By Category" />

        <Box mt="40px" height="75vh">
            <BreakdownChart />
        </Box>
    </Box>

  )
}

export default Breakdown