import React, { Component } from 'react';
import Title from './Title';
export class PortfolioList extends Component {
    state={
        portfolio:[]
    }
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="designers" title="portfolio"></Title>
                        

                        <div className="row">
                            
                        </div>
                    </div>
                </div>
            </React.Fragment>
             // <Portfolio />

        )
    }
}

export default PortfolioList;
