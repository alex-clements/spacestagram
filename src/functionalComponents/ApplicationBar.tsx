import React, {useEffect, useState, useRef} from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import RocketLaunch from '@mui/icons-material/RocketLaunch';
import {motion} from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import MainMenu from './MainMenu';


export default function ApplicationBar(props : any) {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuButtonRef = useRef(null);

    useEffect(() => {
        console.log("Application Bar");
    }, [])

    const rocketStyle = {
        marginX: 1,
    }

    const Spacer = (props : any) => {
        return (
        <div style={{flexGrow: 1}}>

        </div>
        )
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const handleMenuItemClick = (e : string) => {
        props.onMenuItemClick(e);
    }

    return (
        <AppBar position="sticky" sx={{backgroundColor: "#cfcfcf", color: "black"}}>
            <Toolbar>

                <Typography variant="h6" component="div">Spacestagram</Typography>
                <motion.div initial={{x: -20, y: 20, opacity: 0}} animate={{x: 0, y: 0, opacity: 1}} transition={{delay: 0.5}}>
                    <RocketLaunch sx={rocketStyle} />
                </motion.div>
                <Spacer />
                <IconButton ref={menuButtonRef} onClick={toggleMenu} size="large" edge="end" sx={{mr: 2}}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
            <MainMenu onMenuItemClick={handleMenuItemClick} reference={menuButtonRef.current} onMenuClickAway={toggleMenu} open={menuOpen} />
        </AppBar>
    )
}