import React from 'react'
import PostsList from '../components/PostsList';

const MainLayout = (props) => {

    return (
        <>        
            <PostsList/>
            <div>{props.children}</div>
        </>
    )
    
}

export default MainLayout;