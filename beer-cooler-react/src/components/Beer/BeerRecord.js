import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {deleteBeer} from '../../actions/beerActions';

class BeerRecord extends Component {

  onDeleteClick(beer_id){
      this.props.deleteBeer(beer_id);
  }  

  render() {
    const { beer_record } = this.props;
    return (
            <div className="card mb-1 bg-light">
        
            <div className="card-header text-primary">
                ID: {beer_record.id}
            </div>
            <div className="card-body bg-light">
                <h5 className="card-title">{beer_record.name}</h5>
               
                <p className="card-text text-truncate ">
                    Total Likes: {beer_record.likes}
                </p>
               
                <p className="card-text text-truncate ">
                    Total Dislikes: {beer_record.dislikes}
                </p>
               
                <a href="#" className="btn btn-primary">
                    View / Update
                </a>

                <button className="btn btn-danger ml-4" onClick={this.onDeleteClick.bind(this, beer_record.id)}>
                    Delete
                </button>
            </div>
        </div>
    )
  }
}

BeerRecord.propTypes = {
    deleteBeer: PropTypes.func.isRequired
};

export default connect(null, {deleteBeer}) (BeerRecord);