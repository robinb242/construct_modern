
import React, { Component } from 'react';
import {} from 'semantic-ui-react';
import {axios} from 'axios';
import'./ZillowLandSearch.css';
import _ from 'lodash';

class ZillowLandSearch extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  componentWillMount(){
      //called the first time the component is loaded right before the component is added to the page.
    // var queryString = "http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=X1-ZWz18cow1fz1fv_8jmj2&state=wa&city=seattle&childtype=neighborhood&r=json";
    
        axios => ({
          method:'get',
          url: 'http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=X1-ZWz18cow1fz1fv_8jmj2&state=wa&city=seattle&childtype=neighborhood&r=json'

        })

        .then((response) => {
          this.setState({
            neighborhods: response,
          })
          
          console.log(this.state);
        }
          

    );
        
  
   //called after the component is rendered into the page

   }

   componentDidMount() {


   }

  componentWillReceiveProps(nextProps){
    // called when the props provided to the component are changed

  } 
  componentWillUpdate(nextProps, nextState){
    //called when the props and/or state change.

  }
  componentwillUnmount(){
  // called when the component is removed

  }






render() {
  return (
    <div> 
      <input ref = "textBox" type = "text" />
      
    </div>
    );
}
}

export default ZillowLandSearch;













