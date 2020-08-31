import React, {Component} from 'react';
import axios from 'axios'
import {BrowserRouter, NavLink} from "react-router-dom";
import {Route, Switch} from "react-router";
import ShowPost from "./ShowPost";


class Posts extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        posts: [],
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            response => {
                this.setState({posts: response.data})
            }
        )
    }

    render() {
        return (
            <div className='content-wrapper p-2'>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">مطالب</h3>
                                <div className="card-tools">
                                    <div className="input-group input-group-sm" style={{width: 150}}>
                                        <input type="text" name="table_search" className="form-control float-right"
                                               placeholder="جستجو"/>
                                        <div className="input-group-append">
                                            <button type="submit" className="btn btn-default"><i
                                                className="fa fa-search"/></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*.card-header */}
                            <div className="card-body table-responsive p-0">
                                <table className="table table-hover">
                                    <tbody>
                                    <tr className='bg-success'>
                                        <th className='text-center'>شماره</th>
                                        <th className='text-center'>عنوان</th>
                                        <th className='text-center'>نمایش</th>
                                        <th className='text-center'>توضیحات</th>
                                    </tr>

                                    {this.state.posts.slice(0, 5).map((post) => (
                                        <tr key={post.id}>

                                            <td className='text-center'>{post.userId}</td>
                                            <td className='text-center'>{post.title}</td>
                                            <td className='text-center btn btn-default'><NavLink
                                                to={`showPost/${post.id}`}>نمایش</NavLink></td>
                                            <td className='text-center'>{post.body}</td>

                                        </tr>
                                    ))}


                                    </tbody>
                                </table>
                            </div>
                            {/* /.card-body */}
                        </div>
                        {/* /.card */}
                    </div>
                </div>
                {/*row*/}
            </div>

        );
    }
}

export default Posts;

