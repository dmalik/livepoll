import React from 'react';
import styles from './styles.css';

import VelocityComponent   from 'velocity-react/velocity-component';
import velocityHelpers  from 'velocity-react/velocity-helpers';


let AnimationsLeft = {
  over: velocityHelpers.registerEffect({
    defaultDuration: 200,
    calls: [
      [{
        translateX: [10, 0],
        scaleX: ['110%'],
        opacity: 1,
      }, 1, {
        easing: 'ease-out',
      }],
    ],
  }),

  out: velocityHelpers.registerEffect({
    defaultDuration: 200,
    calls: [
      [{
        translateX: [0, 10],
        scaleX: ['100%'],
        opacity: 0.5,
      }, 1, {
        delay: 0,
        easing: 'ease-in',
      }],
    ],
  }),
};

let AnimationsRight = {
  over: velocityHelpers.registerEffect({
    defaultDuration: 200,
    calls: [
      [{
        translateX: [-10, 0],
        scaleX: ['110%'],
        opacity: 1,
      }, 1, {
        easing: 'ease-out',
      }],
    ],
  }),

  out: velocityHelpers.registerEffect({
    defaultDuration: 200,
    calls: [
      [{
        translateX: [0, -10],
        scaleX: ['100%'],
        opacity: 0.5,
      }, 1, {
        easing: 'ease-in',
      }],
    ],
  }),
};

export default class PollItem extends React.Component { // eslint-disable-line

  constructor() {
    super();
    this.state = {hovering: false, duration: 200};
  }

  voteClick = (e) => {
    console.log("Clickers!");
  }

  whenMouseEntered = (e) => {
    this.setState({hovering: true});
    console.log("Over!");
  }

  whenMouseLeft = (e) => {
    this.setState({hovering: false});
    console.log("Out!");
  }

  render() {

    let arrowAnimationLeft;
    let arrowAnimationRight;

    if (this.state.hovering) {
      arrowAnimationLeft = AnimationsLeft.over;
      arrowAnimationRight = AnimationsRight.over;
    } else {
      arrowAnimationLeft = AnimationsLeft.out;
      arrowAnimationRight = AnimationsRight.out;
    }

    return (
      <div>
        <div className={styles.itemContainer}>
          <div className={styles.leftSide}>
            <div>
              <div id={styles.circle}></div>
            </div>
            <div className={styles.lineMid}></div>
            <div>
              <div id={styles.circle}></div>
            </div>
          </div>
          <div className={styles.spacer}></div>
          <div className={styles.middle}>
            <div className={styles.title}>Young The Giant<br/>Something To Believe In</div>
            <div className={styles.media}>Media</div>
            <div className={styles.voteContainer}>
              <div className={styles.voteLeft}>
                <VelocityComponent animation={arrowAnimationLeft} >
                  <span> > > > </span>
                </VelocityComponent>
              </div>
              <button className={styles.voteButton} onClick={this.voteClick} onMouseEnter={this.whenMouseEntered} onMouseLeave={this.whenMouseLeft}>
                Vote
              </button>
              <div className={styles.voteRight}>
                <VelocityComponent animation={arrowAnimationRight} >
                  <span>&#60; &#60; &#60;</span>
                </VelocityComponent>
              </div>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.stats}>Split it!</div>
          </div>
          <div className={styles.spacer}></div>
          <div className={styles.rightSide}>
            <div>
              <div id={styles.circle}>
              </div>
            </div>
            <div className={styles.lineMid}></div>
            <div>
              <div id={styles.circle}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
