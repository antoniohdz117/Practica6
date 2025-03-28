import {Box, Container} from "@mui/material";
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return (
        <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
            <Navbar/>
            <Container className={"container"}> {children}</Container>
            <Box className={"footer"}>RJV PRACTICA  6</Box>
        </Box>
    );
}

export default Layout;
