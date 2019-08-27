import React, { Component } from 'react';
import Title from './Title';
import Portfolio from './Portfolio';

export class Home extends Component {
    state={
        portfolio:[]
    }
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="designers" title="portfolio for Photos and Designs"></Title>
                        <div className="row">
                            
                        </div>
                    </div>
                </div>
            </React.Fragment>
             // <Portfolio />

        )
    }
}

export default Home;