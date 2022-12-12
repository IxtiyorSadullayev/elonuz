import React from 'react'

function Elon({title, body, like, deslike, createdAt, show_count}) {
  console.log(like,deslike)
  return (
    <div className='container-fluid my-2 border rounded'>
        <h3 className="text-muted">{title}</h3>
        <p className="text-muted">{body}</p>
        <div className="row">
            <div className="col-9">
                <span className='mx-3 fs-5 text-success site-brand'><i className="fa fa-thumbs-up"></i> {like.length}</span>
                <span className='mx-3 fs-5 text-danger'><i className="fa fa-thumbs-down"></i> {deslike.length}</span>

            </div>
            <div className="col-3">
                <span className="text-muted me-3">{createdAt.split('T')[0]}  {createdAt.split('T')[1]}</span>
                <span className='text-muted'> <i className="fa fa-eye mx-2"></i> {show_count}</span>
            </div>
        </div>
    </div>
  )
}

export default Elon