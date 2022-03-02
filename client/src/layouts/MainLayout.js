import React from 'react'
import { CssBaseline, Container, Grid, AppBar, Toolbar, Typography, Button, IconButton, makeStyles } from "@material-ui/core";
import { useState } from 'react';


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


const MainLayout = (props) => {

    const classes = useStyle();
    const [open, setOpen] = useState(false);

    return (
        <>
            <AppBar position='static' color='inherit' elevation={0}>
                <Toolbar>
                    
                    <IconButton edge="start" className={classes.container} color="inherit" />
                    
                    <Typography variant='h6' color="secondary" className={classes.title}>
                        <a href="http://localhost:3000/posts">Blogify</a>
                    </Typography>
                    
                    <Button color='primary' variant='outlined'  onClick={() => setOpen(true)}>
                        Ana Sayfa
                    </Button>

                    <Button color='primary' variant='outlined'  onClick={() => setOpen(true)}>
                        Hakkımda
                    </Button>

                    <Button color='primary' variant='outlined'  onClick={() => setOpen(true)}>
                        Yazılar
                    </Button>

                    <Button color='primary' variant='outlined'  onClick={() => setOpen(true)}>
                        Yeni Yazı
                    </Button>
                    
                </Toolbar>
            </AppBar>
            <div>{props.children}</div>
        </>
    )
}

export default MainLayout