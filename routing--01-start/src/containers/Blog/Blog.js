import React, { Component } from 'react';
import './Blog.css';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";

class Blog extends Component {
    state = {
        auth: false,
    }

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts"
                                exact
                                // can use this to subscribe the active class
                                activeClassName="active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}
                            >Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={NewPost} /> : null }
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts" />
                    {/*
                        this has to be the last because the order is important,
                        especially with the switch, otherwise our new-post could
                        be consider an id
                    */}
                    {/*<Route path="/posts/:id" exact component={FullPost} />*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;
