import { Box } from '@mui/material'
import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

const Loading = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
        <InfinitySpin color="white" />
    </Box>
  )
}

export default Loading