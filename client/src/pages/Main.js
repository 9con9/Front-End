import React from 'react';
import styled from 'styled-components';
import 'fullpage.js/vendors/scrolloverflow';
import ReactFullpage from '@fullpage/react-fullpage';

class Mainpage extends React.Component {
    onLeave(origin, destination, direction) {
      console.log("Leaving section " + origin.index);
    }
    afterLoad(origin, destination, direction) {
      console.log("After load: " + destination.index);
    }
    render() {
      return (
        <ReactFullpage
          scrollOverflow={true}
          navigation={true}
          navigationPosition='right'
          onLeave={this.onLeave.bind(this)}
          afterLoad={this.afterLoad.bind(this)}
          render={({ state, fullpageApi }) => {
            return (
              <div id="fullpage-wrapper">
                <div className="section section1">
                  <img src={process.env.PUBLIC_URL +'/img/pic5.jpg'} style={{width:"100%", height:"100%"}} />
                </div>
                <div className="section">
                  <div className="slide">
                    <img src={process.env.PUBLIC_URL +'/img/pic2.jpg'} style={{width:"100%", height:"100%"}}/>
                  </div>
                  <div className="slide">
                    <h3>설명2</h3>
                  </div>
                  <div className="slide">
                    <h3>설명3</h3>
                  </div>
                </div>
                <div className="section active">
                  <img src={process.env.PUBLIC_URL +'/img/pic3.jpg'} style={{width:"100%", height:"100%"}}/>
                </div>
              </div>
            );
          }}
        />
      );
    }
  }
  
  export default Mainpage

  const h3 = styled.div`
  justify-content: center;
  `