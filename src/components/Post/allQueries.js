
function AllQueries({ allQueries }) {
  return (
    <div className="all-queries">
      <ul>
      { allQueries.map((item) => (
        <div>
          <li>{item.issue}</li>
          {item.comments.length > 0 && <ul>
            { item.comments.map((item2) => (
              <li>{item2.comment}<br></br>
                <p>User Name:- {item2.user.name}</p>
              </li>
            ))}
            </ul>}
        </div>
      ))}
      </ul>
    </div>
  )
}

export default AllQueries;