import React from 'react'
import { CssBaseline, Container, Grid, AppBar, Toolbar, Typography, Button, IconButton, makeStyles } from "@material-ui/core";
import PenIcon from "@material-ui/icons/Create";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import PostsList from './components/PostsList';
import { useState } from 'react';
import { AddPostForm } from './components/AddPostForm.jsx';


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

const App = () => {
  console.log("Client/src/App.js Çalıştı");

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }





  const classes = useStyle();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppBar position='static' color='inherit' elevation={0}>
          <Toolbar>

            <IconButton edge="start" className={classes.container} color="inherit" />
            <Typography variant='h6' color="secondary" className={classes.title}>
              <a href="http://localhost:3000/posts">Blogify</a>
            </Typography>
            <Button color='primary' variant='outlined' startIcon={<PenIcon />} onClick={handleOpen}>
              Yeni Yazı
            </Button>

          </Toolbar>
        </AppBar>

        <Grid container className={classes.container}>
          <Grid item xs={12}>
            <Router>
              <Routes>
                <Route exact path='/posts' element={<PostsList />} />
                <Route exact path='/*' element={<Navigate to="/posts" />} />
              </Routes>
            </Router>
          </Grid>
        </Grid>
      </Container>

      <AddPostForm open={open} handleClose={handleClose} />

    </>
  )
}

export default App