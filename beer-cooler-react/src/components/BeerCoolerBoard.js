import React, { Component } from 'react';
import { Link } from "react-router-dom"
import BeerRecord from './Beer/BeerRecord';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getBacklog} from "../actions/beerActions";

class BeerCoolerBoard extends Component {

    componentDidMount(){
        this.props.getBacklog();
    }
    render() {
        const {beer_records} = this.props.beer_records

        let BoardContent;
        let unreviewedOrOtherBeers =[];
        let popularBeers = [];
        let unpopularBeers = [];

        const CoolerBoardAlgorithm = beer_records => {
            if(beer_records.length < 1) {
                return (
                    <div className="alert alert-info text-center" role="alert">
                    No Beer Records On This Board
                    </div>
                )
            } else {
                const beers = beer_records.map(beer_record => (
                    <BeerRecord key={beer_record.id} beer_record={beer_record} />
                ));

                for(let i = 0; i<beers.length; i++){
                    if(beers[i].props.beer_record.status==='ACCEPTABLE'){
                        unreviewedOrOtherBeers.push(beers[i]);
                    }

                    if(beers[i].props.beer_record.status==='LIQUID_GOLD'){
                        popularBeers.push(beers[i]);
                    }

                    if(beers[i].props.beer_record.status==='SWILL'){
                        unpopularBeers.push(beers[i]);
                    }
                }
            }
        };

        CoolerBoardAlgorithm(beer_records);

        return (
                <div className="container">
                <Link to="/addBeer" className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle"></i> Create a New Beer Record 
                    </Link>
                <br />
                <hr />
                {/* <!-- Backlog STARTS HERE --> */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header bg-secondary text-white">
                                    <h3>Acceptable.</h3>
                                    <h5>Neutral Opinion or Non-Reviewed</h5>
                                </div>
                            </div>
        
                            {/* <!-- SAMPLE PROJECT TASK STARTS HERE --> */}
                            {/* <div className="card mb-1 bg-light">
        
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
                            </div> */}
        
                            {/* <!-- SAMPLE BEER PRODUCT ENDS HERE --> */}
                            {" "}
                            {unreviewedOrOtherBeers}
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header bg-primary text-white">
                                    <h3>Liquid Gold</h3>
                                    <h5>Popular Beers</h5>
                                </div>
                            </div>
                            {/* <!-- SAMPLE BEER PRODUCT STARTS HERE --> */}
        
                            {/* <!-- SAMPLE BEER PRODUCT ENDS HERE --> */}
                            {" "}
                            {popularBeers}
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header bg-success text-white">
                                    <h3>Tastes Like Swill</h3>
                                    <h5>Beers For an Aquired Taste</h5>
                                </div>
                            </div>
                            {/* <!-- SAMPLE BEER PRODUCT STARTS HERE -->
        
                            <!-- SAMPLE BEER PRODUCT ENDS HERE --> */}
                            {" "}
                            {unpopularBeers}
                        </div>
                    </div>
                </div>
        
                {/* <!-- Backlog ENDS HERE --> */}
            </div>
        );
    }
}

BeerCoolerBoard.propTypes = {
    getBacklog: PropTypes.func.isRequired,
    beer_records: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    beer_records: state.beer_record
});

export default connect(
    mapStateToProps, 
    {getBacklog}
    ) (BeerCoolerBoard);