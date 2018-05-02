import React from 'react';

const CommentSection = (props) =>{
    return (
        <div className="comment-section">
            {props.DataProps.map(data => {
                return <div key={data.username + data.length}> {data.comments.username} + {data.comments.text} </div>
            })}

            <img></img>
        </div>
    )
}
       
    

export default CommentSection;