import React from 'react';

import './Post.css';
// import {withRouter} from "react-router";

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);

export default post;

// import hoc router props into this component
// export default withRouter(post);
