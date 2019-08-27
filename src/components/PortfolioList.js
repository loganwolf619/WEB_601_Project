import React, { Component } from 'react';
import Title from './Title';
export class PortfolioList extends Component {
    state={
        portfolio:[]
    }
    render() {
        return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="d-block w-100" src="./1.jpg"  alt="First slide"></img>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src="./2.jpg"  alt="Second slide"></img>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src="./3.jpg"  alt="Third slide"></img>
                    </div> 
                </div>
                <a clclassNameass="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span clclassNameass="sr-only">Previous</span>
                </a>
                <a claclassNamess="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span claclassNamess="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>
        </div>

        )
    }
}

export default PortfolioList;
