import React from 'react'
import { CssBaseline, Container, Grid, AppBar, Toolbar, Typography, Button, IconButton, makeStyles } from "@material-ui/core";
import PostsList from './components/PostsList';


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



const MainGrid = () => {

    const classes = useStyle();

    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg">
                <Grid container className={classes.container}>
                    <Grid item xs={12}>
                        <div>maingrid</div>
                    </Grid>
                </Grid>
            </Container>
            <div>MainGrid</div>
        </>
    )
}

export default MainGrid