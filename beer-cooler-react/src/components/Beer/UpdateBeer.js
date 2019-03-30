import React, { Component } from 'react';
import { connect } from "react-redux";
import classnames from "classnames";
import PropTypes from "prop-types";
import {getBeer, addBeer} from "../../actions/beerActions";

class UpdateBeer extends Component {

  constructor(){
      super();
      this.state = {
          id: "",
          name: "",
          status: "",
          likes: "",
          dislikes: "",
          errors: {}

      }
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps){

    if(nextProps.Errors) {
        this.setState({errors: nextProps.errors});
    }

    const {
    id,
    name, 
    status,
    likes, 
    dislikes
    } = nextProps.beer_record

    this.setState({
    id,
    name, 
    status,
    likes, 
    dislikes
    });
  }

  componentDidMount(){
      const {beer_id} = this.props.match.params;
      this.props.getBeer(beer_id);
  }

  onSubmit(e){
      e.preventDefault()
      const updatedBeer = {
          id: this.state.id,
          name: this.state.name,
          status: this.state.status,
          likes: this.state.likes,
          dislikes: this.state.dislikes
      };

      this.props.addBeer(updatedBeer, this.props.history);
  }

  onChange(e){
      this.setState({[e.target.name]:e.target.value})
  }

  render() {
    const {errors} = this.state;
    return (
        <div className="addBeer">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <a href="/" className="btn btn-light">
                        Back to Beer Cooler Inventory Board
                    </a>
                    <p></p>
                    <h4 className="display-4 text-center">Add /Update Beer Record</h4>
                    <form onSubmit = {this.onSubmit}>
                        <div className="form-group">
                            <input 
                            type="text" 
                            className={classnames("form-control form-control-lg",{
                                "is-invalid":errors.name
                            })}
                            name="name" placeholder="Name of Beer" 
                            value = {this.state.name} 
                            onChange = {this.onChange} />
                            {/* {errors.name && ( */}
                                {/* <div className="invalid-feedback">{errors.name}</div> */}
                            {/* )} */}
                        </div>
                        
                        <p></p>

                        <div className="form-group">
                            <p></p>
                            <p>Total Likes: 
                                <input type="number" 
                                className="form-control form-control-lg" 
                                placeholder="0" 
                                name="likes" 
                                id="num_likes" 
                                value = {this.state.likes} 
                                onChange = {this.onChange} /></p>
                            <p>Total Dislikes: 
                                <input 
                                type="number" 
                                className="form-control form-control-lg" 
                                placeholder="0" 
                                name="dislikes" 
                                id="num_dislikes" 
                                value = {this.state.dislikes} 
                                onChange = {this.onChange} /></p>
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

UpdateBeer.propTypes = {
    beer_record: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    getBeer: PropTypes.func.isRequired,
    addBeer: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    beer_record: state.beer_record.beer_record,
    errors: state.errors
})

export default connect(
    mapStateToProps, 
    {getBeer, addBeer}
) (UpdateBeer);
