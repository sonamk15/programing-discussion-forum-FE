import './index.css';

import React, { useState } from 'react'


function AllQueries({ allQueries }) {
  const [comment, setComment] = useState('')
  console.log(comment);

  return (
    <div className="all-queries">
      <ul className="ul">
      { allQueries.map((item) => (
        <div className="queries">
          <li className="query" style={{}}>{item.issue}</li>
          
          
          <li className="query" style={{}}>Replied: {item.comment}</li>
          

          <textarea id={item.id} placeholder="Reply" onChange={(e) => setComment(e.target.value)}></textarea>
          
           <button type='submit'>REPLY</button>

           {item.comments.length > 0 && <ul>
            {item.comments.map((item2) => (
              <p>User Name:- {item2.user.name}
               <li className="comment">{item2.comment}<br></br>
                </li>
              </p>
            ))}
            </ul>}

        </div>
      ))}
      </ul>
    </div>
  )
}

export default AllQueries;