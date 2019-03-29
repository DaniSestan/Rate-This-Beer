import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addBeer} from "../../actions/beerActions";
import classnames from "classnames"

class AddBeer extends Component {
    constructor(){
        super();
        this.state = {
            name: "",
            likes: "",
            dislikes: "",
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors:nextProps.errors})
        }
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
        
    }

    onSubmit(e){
        e.preventDefault();
        const newBeer = {
            name: this.state.name,
            likes: this.state.likes,
            dislikes: this.state.dislikes
        };
        // console.log(newBeer);
        this.props.addBeer(newBeer, this.props.history)
    }
    render() {
        const {errors} = this.state;
        return (
            <div className="addBeer">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <Link to="/" className="btn btn-light">
                            Back to Beer Cooler Inventory Board
                        </Link>
                        <p></p>
                        <h4 className="display-4 text-center">Add /Update Beer Record</h4>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg", {
                                        "is-invalid": errors.name
                                    })} 
                                    name="name" 
                                    value={this.state.name}
                                    placeholder="Name of Beer"
                                    onChange={this.onChange} 
                                />
                                {
                                    errors.name && (
                                        <div className="invalid-feedback">{errors.name}</div>
                                    )
                                }
                            </div>
                            <p></p>
                            {/* <h6>Edit Ratings: <input type="checkbox" id="chk-edit-likes-dislikes" onclick="disable_enable_edit_ld()" /> </h6> */}
                            <div className="form-group">
                                <p></p>
                                <h4>Edit Total Likes:</h4>
                                <p> 
                                    <input type="number" 
                                    className="form-control form-control-lg" 
                                    placeholder="0"
                                    id="num_likes" 
                                    name="likes"
                                    value={this.state.likes} 
                                    onChange={this.onChange} /></p>
                            </div>

                            <div className="form-group">
                                <p></p>
                                <h4>Edit Total Dislikes:</h4>
                                <p> 
                                    <input type="number" 
                                    className="form-control form-control-lg" 
                                    placeholder="0" 
                                    id="num_dislikes"
                                    name="dislikes"
                                    value={this.state.dislikes}
                                    onChange={this.onChange} /></p>
                            </div>
                            
                            <input type="submit" value="Submit Changes" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>    
        );
    }
}

AddBeer.propTypes = {
    addBeer: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors
})

export default connect(mapStateToProps, {addBeer}) (AddBeer);

  