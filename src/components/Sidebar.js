import React, { useState } from "react";
import { IconButton, Drawer, List, ListItem, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [drawerOpen, setDrawerOpen] =useState(false)
    const toggleDrawer = (open) => (event)=> {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    }

    return (
        <>
            <IconButton edge="start" onClick={toggleDrawer(true)}>
                <MenuIcon />
            </IconButton>

            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box className="sidebar" sx={{ width: 250 }}>
                    <List>
                        <ListItem button component={Link} to="/">
                            Inicio
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default Sidebar;


