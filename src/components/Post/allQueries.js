import './index.css';

import React, { useState } from 'react'
import forumFetch from "../../utils/forumFetch";



function AllQueries({ allQueries }) {
  console.log('allQueries==>', allQueries);

  const [comment, setComment] = useState('')

  console.log(comment);



  const addComment = (item) => {
    const data = {
      comment: comment,
      userId: item.userId,
      queryId: item.id
    };

    forumFetch('api/comment', 'POST', {
      data: data
    }).then(res => {
      setComment('')
        (res ? window.location.reload() : '');

    }).catch((err) => { return err });
  }

  return (
    <div className="all-queries">
      <div className='commentbox'>
        <ul className="ul">
          {allQueries.length !== 0 && allQueries.map((item) => (
            <div className="queries">
              <li className="query" style={{}}>Q: {item.issue}</li>

              <li className="comment" style={{}}>{item.comment}</li>

              <textarea id={item.id} className="reply" name='comment' placeholder='Write your ans here' onChange={(e) => setComment(e.target.value)}></textarea>
              <button className="" type='submit' onClick={() => addComment(item)}>REPLY</button>

              {item.comments.length > 0 && <ul className='reply-on-comment'>
                {item.comments.map((item2) => (
                  <p >
                    <span style={{'font-weight':'bold'}}> 
                    User Name:- {item2.user.name}
                      </span> 

                    <li className="comment">{item2.comment}<br></br>
                    </li>
                  </p>
                ))}
              </ul>}

            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AllQueries;