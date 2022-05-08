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
          onLeave={this.onLeave.bind(this)}
          afterLoad={this.afterLoad.bind(this)}
          render={({ state, fullpageApi }) => {
            return (
              <div id="fullpage-wrapper">
                <div className="section section1">
                  <h3>사진링크1</h3>
                </div>
                <div className="section">
                  <div className="slide">
                    <h3>설명1</h3>
                  </div>
                  <div className="slide">
                    <h3>설명2</h3>
                  </div>
                  <div className="slide">
                    <h3>설명3</h3>
                  </div>
                </div>
                <div className="section active">
                  <h3>사진링크2</h3>
                  <button onClick={() => fullpageApi.moveTo(1, 0)}>
                    맨 위로
                  </button>
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