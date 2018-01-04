import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
    return (
        <div>
            <h1>Welcome to the education</h1>
            <Link to="/auth">Authentication</Link>
        </div>
    )
}

export default Home;