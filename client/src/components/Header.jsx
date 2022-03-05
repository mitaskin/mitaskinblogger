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
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { Link } from "react-router-dom";
import AddPost from "./AddPost";

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
  let [addPost, setShowAddPost] = useState(false);

  return (
    <>
      {addPost && <AddPost/>}

      <AppBar position="static" color="inherit" elevation={5} sx={{ boxShadow: 3, m:5}} >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.container}
            color="inherit"
          />

          <Typography variant="h6" color="secondary" className={classes.title}>
            <a href="http://localhost:3000/posts">mi.taskin</a>
          </Typography>

          <Button color="primary" variant="outlined" href="/" className={classes.menuButton}>
            Ana Sayfa
          </Button>

          <Button color="primary" variant="outlined" href="/About" className={classes.menuButton}>
            Hakkımda
          </Button>

          <Button color="primary" variant="outlined" href="/Contact" className={classes.menuButton}>
            İletişim
          </Button>

          <Button
            color="primary"
            variant="contained"
            onClick={() => setShowAddPost(true)}
            endIcon={<SendIcon />}
            className={classes.menuButton}
          >
            Yeni Yazı
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
