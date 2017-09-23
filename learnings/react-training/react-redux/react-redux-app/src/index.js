
 

import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import { render } from 'react-dom';

class RouterApp extends Component{
    state = {
        counter: 1,
        gists:null
    }
    clickMe = this.clickMe.bind(this);
    clickMe(event) {
        console.log(this.state.gists);
    }
 componentDidMount() {
    fetch('https://api.github.com/gists')
      .then(res => res.json())
      .then(gists => {
          console.log(gists)
        this.setState({ gists })
      })
  }

    
 render() {
    const { gists } = this.state;
        return (
            <Router>
                <div>
                <ul className="container">        
               {gists ? (
               gists.map((gist, index) => (
                <li  key={gist.id}>
                
                 <p><Link to={`/g/${gist.id}`}>
                    {gist.description || '[no description]'}
                  </Link></p>
                </li>
                            
                        ))
              ) : (
                <div>Loading...</div>
                   )}
                </ul>            
               <div>
                <Route extact={true} path="/" render={()=><h1>Welcome</h1>} />    
                <Route path="/g/:gistId" render={({ match }) => {
                    console.log(match.params.gistId);
                    const gist = gists && gists.find(g => g.id === match.params.gistId)    
                    console.log(gist);
                    return (<div>
                       <h1>{JSON.stringify(gist)}</h1>
                   
                    </div>)
        
                }}/>    
                        
               </div>    

            </div> 
            </Router>
           
    )
     
    }
}
const Gist__ = ({ gist }) => {
    console.log(gist)
    return (
        <h1>ddd</h1>
    )
}
const Gist_ = ({match}) => {
    return(<h1>
     {match.params.gistid}    
    </h1>)
}

render(<RouterApp />, root);