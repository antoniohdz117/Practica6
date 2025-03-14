import React from 'react';
import {Box, Container, Typography} from "@mui/material";

const Layout = ({ children }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundColor: 'lightgray',
                padding: 3,
                borderRadius: 2,
            }}
        >
            <Container className="container">
                {children}
            </Container>
            <Box className="footer" sx={{ width: '100%', textAlign: 'center', padding: 2, backgroundColor: '#333', color: 'white', marginTop: 'auto' }}>
                <Typography variant="body2">
                    © {new Date().getFullYear()} Mi Aplicación. Todos los derechos reservados.
                </Typography>
            </Box>


        </Box>
    );
};

export default Layout;