import React, {useState} from 'react';
import { LightModeOutlined, DarkModeOutlined, Menu as MenuIcon, Search, SettingsOutlined, ArrowDropDownOutlined } from '@mui/icons-material';
import FlexBetween from 'components/FlexBetween';
import { useDispatch } from 'react-redux';
import {setMode} from "state";
import mern_dashboard_profile_image from "assets/mern_dashboard_profile_image.jpeg";
import { AppBar, Box, Button, IconButton, InputBase, Menu, MenuItem, Toolbar, Typography, useTheme } from '@mui/material';

const Navbar = ({
    isSidebarOpen,
    setIsSidebarOpen,
    user
}) => {
    const dispatch = useDispatch();
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }


  return <AppBar
  sx={{
    position: "static",
    background:"none",
    boxShadow: "none",
  }}
  >

    <Toolbar sx={{justifyContent:"space-between"}}>
        {/* Leftside */}
        <FlexBetween>
            <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <MenuIcon /> 
            </IconButton>
            <FlexBetween 
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
            >
                <InputBase placeholder='Search...' />
                <IconButton>
                    <Search />
                </IconButton>
            </FlexBetween>
        </FlexBetween>

        {/* Rightside */}
        <FlexBetween gap="1.5rem">

            <IconButton onClick={() => dispatch(setMode())}>
                {theme.palette.mode === "dark" ? (
                    <LightModeOutlined sx={{fontSize: "25px"}} />
                ):(
                    <DarkModeOutlined sx={{fontSize: "25px"}} />
                )}
            </IconButton>

            <IconButton>
                <SettingsOutlined sx={{fontSize: "25px"}} />
            </IconButton>

            <FlexBetween>
                <Button onClick={handleClick} sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    textTransform: "none",
                    gap: "1rem",
                }}>
                    <Box component="img" alt="profile"
                        src={mern_dashboard_profile_image}
                        height="40px"
                        width="40px"
                        borderRadius="100%"
                        sx={{objectFit: "cover"}}
                    />

                    <Box textAlign="left">

                        <Typography fontSize="0.85rem" fontWeight="bold"
                        sx={{color: theme.palette.secondary[100]}}
                        >{user.name}</Typography>

                        <Typography fontSize="0.75rem"
                        sx={{color: theme.palette.secondary[200]}}
                        >{user.occupation}</Typography>  

                    </Box>
                    <ArrowDropDownOutlined sx={{color: theme.palette.secondary[300], fontSize:"25px"}}/>
                </Button>
                <Menu anchorEl={anchorEl} open={isOpen} onClose={handleClose} anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}>
                    <MenuItem onClick={handleClose} >Log out</MenuItem>
                </Menu>
            </FlexBetween>



        </FlexBetween>
    </Toolbar>



  </AppBar>
}
 
export default Navbar