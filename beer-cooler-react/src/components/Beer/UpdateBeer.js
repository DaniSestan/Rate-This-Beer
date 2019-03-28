import React, { Component } from 'react'

class UpdateBeer extends Component {
  render() {
    return (
        <div className="addProjectTask">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <a href="/BeerCooler.html" className="btn btn-light">
                        Back to Beer Cooler Inventory Board
                    </a>
                    <p></p>
                    <h4 className="display-4 text-center">Add /Update Beer Record</h4>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" name="name" placeholder="Name of Beer" />
                        </div>
                        
                        <p></p>

                        <div className="form-group">
                            <h6>Edit Ratings: <input type="checkbox" id="chk-edit-likes-dislikes" onclick="disable_enable_edit_ld()" /> </h6>
                            <p></p>
                            <p>Total Likes: <input type="number" className="form-control form-control-lg" placeholder="0" name="likes" id="num_likes" disabled/></p>
                            <p>Total Dislikes: <input type="number" className="form-control form-control-lg" placeholder="0" name="dislikes" id="num_dislikes" disabled/></p>
                        </div>
                        
                        <input type="submit" value="Submit Changes" className="btn btn-primary btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>

    )
  }
}

export default UpdateBeer;
