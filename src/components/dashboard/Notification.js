import React from 'react'
import moment from "moment";
export default (props) => {
  const { notifications } = props;

  return (
<div className="card border-light mb-3">
  <div className="card-header">Notifications</div>
  <div className="card-body">
    <ul className="notification">
      {notifications && notifications.map(item => {
        return (
          <li key={item.id}>
            <h4>{item.user}</h4>
            <h5>{item.content}</h5>
            <p>{moment(item.time.toDate()).fromNow() } </p>
          </li>
        )
      })}
    </ul>
  </div>
</div>
  )
}
