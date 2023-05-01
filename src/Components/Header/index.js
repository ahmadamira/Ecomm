
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';

import styles from './indexh.module.css'
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
const navItems = ['Home', 'About', 'Contact', 'Sign up'];

const Search = styled('div')(({ theme }) => ({
    flexGrow: 1,
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));
const Header = () => {
    return (
        <div>




            <Box sx={{ flexGrow: 1 }}>
                <Box
                    className={styles.navup}


                >
                    <Typography className={styles.navtxt}>
                        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    </Typography>
                </Box>
                <AppBar position="static" sx={{ backgroundColor: 'white' }}>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"

                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: "black" }}

                        >
                            Exclusive
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }} >
                            {navItems.map((item) => (
                                <Button key={item} sx={{ color: '#000' }}>
                                    {item}
                                </Button>
                            ))}
                        </Box>

                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon style={{ color: 'black' }} />
                            </SearchIconWrapper>
                            <StyledInputBase

                                placeholder="What are you looking for?"
                                inputProps={{ 'aria-label': 'search' }}

                            />
                        </Search>
                        <FavoriteBorderIcon className={styles.navBartitle} style={{ color: 'black' }} />
                        <ShoppingCartIcon style={{ color: 'black' }} />
                        <PersonOutlineOutlinedIcon style={{ color: 'black' }} />

                    </Toolbar>
                </AppBar>
            </Box>

        </div>
    )
}

export default Header
