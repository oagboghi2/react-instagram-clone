import React, { Component } from 'react';

const PostContainer = (props) => {
        return (
            <div className="post-container">
                <h1>PostContainer</h1>
                <div>
                    {props.DataProps.map(data =>{
                        return <div key={data.length + data.username}>{data.username}
                            <img src={data.imageUrl} />
                            </div>
                        
                    })}
                </div>
            </div>
        )
    }

export default PostContainer;
