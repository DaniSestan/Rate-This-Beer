import React, { Component } from 'react'

class BeerRecord extends Component {
  render() {
    return (
             <div className="card mb-1 bg-light">
        
            <div className="card-header text-primary">
                ID: 0
            </div>
            <div className="card-body bg-light">
                <h5 className="card-title">name</h5>
                <p className="card-text text-truncate ">
                    likes
                </p>
                <p className="card-text text-truncate ">
                    dislikes
                </p>
                <a href="#" className="btn btn-primary">
                    View / Update
                </a>

                <button className="btn btn-danger ml-4">
                    Delete
                </button>
            </div>
        </div>
    )
  }
}

export default BeerRecord;