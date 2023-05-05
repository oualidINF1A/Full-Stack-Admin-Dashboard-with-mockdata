import React from 'react'
import {Box, Typography, useTheme} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import FlexBetween from './FlexBetween'

const StatBox = ({title, value, increase , icon, description, page}) => {

    const theme = useTheme()
    const navigate = useNavigate()

    const handleClick = () => {
        if(page) navigate(`/${page}`)
    }


  return (
      <Box gridColumn="span 2" gridRow="span 1" display="flex" flexDirection="column" 
      justifyContent="space-between" p="1.5rem 1rem" flex="1 1 100%" backgroundColor={theme.palette.background.alt} borderRadius="0.55rem"
      sx={{
          "&:hover" : {
              cursor: page ? "pointer"  : "auto",
              opacity: page ? "0.6" : "1.0",
          }
      }}
      onClick={handleClick}
      >

          <FlexBetween>
              <Typography variant="h6" sx={{color:theme.palette.secondary[100]}}>{title}</Typography>
              {icon}
          </FlexBetween>

          <Typography variant="h3" fontWeight="600" sx={{color:theme.palette.secondary[200]}}>{value}</Typography>

          <FlexBetween gap="1rem">
              <Typography variant="h3" fontStyle="italic" sx={{color:theme.palette.secondary.light}}>{increase}</Typography>
              <Typography>{description}</Typography>
          </FlexBetween>
      </Box>
  )
}

export default StatBox