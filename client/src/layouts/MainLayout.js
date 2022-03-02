import React from 'react'
import PostsList from '../components/PostsList';
import Header from '../components/Header.jsx';



const MainLayout = (props) => {

    return (
        <>
            <Header/>
            

            <PostsList/>

            <div>{props.children}</div>
        </>
    )
    
}

export default MainLayout