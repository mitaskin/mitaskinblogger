import React from "react";
import {
  CssBaseline,
  Container,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const useStyle = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    container: {
      marginTop: theme.spacing(2),
    },
  }));

  const classes = useStyle();
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static" color="inherit" elevation={3}>
        <Toolbar>
            <IconButton
            edge="start"
            className={classes.container}
            color="inherit"
          />

          <Typography variant="h6" color="secondary" className={classes.title}>
            <a href="http://localhost:3000/posts">mi.taskin</a>
          </Typography>



            <Button color="primary" variant="outlined" href="/">
              Ana Sayfa
            </Button>
               
            <Button color="primary" variant="outlined" href="/About">
              Hakkımda
            </Button>
         
            <Button color="primary" variant="outlined" href="/Contact">
              İletişim
            </Button>
        
            <Button
              color="primary"
              variant="contained"
              endIcon={<SendIcon />}
            >
              Yeni Yazı
            </Button>
          
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
