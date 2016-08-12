import React from 'react';
import styles from './styles.css';

import YouTube from 'react-youtube';
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

let AnimationsVote = {
  over: velocityHelpers.registerEffect({
    defaultDuration: 50,
    calls: [
      [{
        backgroundColor: "#1f6fe6",
      }, 1, {
        easing: 'ease-out',
      }],
    ],
  }),

  out: velocityHelpers.registerEffect({
    defaultDuration: 50,
    calls: [
      [{
        backgroundColor: "#1f1f1f",
      }, 1, {
        easing: 'ease-in',
      }],
    ],
  }),

  down: velocityHelpers.registerEffect({
    defaultDuration: 50,
    reverse: true,
    calls: [
      [{
        backgroundColor: "#1f1f1f",
        easing: 'ease-in',
      }, 1, {
        easing: 'ease-in',
      }],
    ],
  }),
};

let AnimationsPlay = {
  over: velocityHelpers.registerEffect({
    defaultDuration: 200,
    calls: [
      [{
        scale: ['100%'],
        opacity: 1,
      }, 1, {
        easing: 'pulse',
      }],
    ],
  }),

  out: velocityHelpers.registerEffect({
    defaultDuration: 200,
    calls: [
      [{
        scale: ['80%'],
        opacity: 0.7,
      }, 1, {
        easing: 'ease-in',
      }],
    ],
  }),
};

export default class PollItem extends React.Component { // eslint-disable-line

  constructor() {
    super();
    this.state = {hovering: false, duration: 200, voteclick: false, mediaclick: false, playHover: false};
  }

  voteClick = (e) => {
    console.log("Clickers!");
    this.setState({voteclick: true});
    this.setState({hovering: false});
  }

  voteClickDone = () => {
    console.log("Vote Click Done!");
    this.setState({voteclick: false});
  }

  whenMouseEntered = (e) => {
    this.setState({hovering: true});
    console.log("Over!");
  }

  whenMouseLeft = (e) => {
    this.setState({hovering: false});
    console.log("Out!");
  }

  mediaClick = (e) => {
    console.log("media click");
    this.setState({mediaclick: true});
  }

  playHovering = (e) => {
    this.setState({playHover: true});
    console.log("Over!");
  }

  playOut = (e) => {
    this.setState({playHover: false});
    console.log("Out!");
  }

  render() {

    const opts = {
      height: '155',
      width: '275',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    let arrowAnimationLeft;
    let arrowAnimationRight;
    let voteAnimation;
    let playAnimation;

    if (this.state.hovering) {
      arrowAnimationLeft = AnimationsLeft.over;
      arrowAnimationRight = AnimationsRight.over;
      voteAnimation = AnimationsVote.over;
    } else {
      arrowAnimationLeft = AnimationsLeft.out;
      arrowAnimationRight = AnimationsRight.out;
      voteAnimation = AnimationsVote.out;
    }

    if (this.state.voteclick) {
      voteAnimation = AnimationsVote.down;
    }

    if (this.state.playHover) {
      playAnimation = AnimationsPlay.over;
    } else {
      playAnimation = AnimationsPlay.out;
    }

    let chartWidth = {
      width: '42%',
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
            <div className={styles.media}>
              { this.state.mediaclick ?
                <YouTube videoId='m_ZRWZv14SA' opts={opts} onReady={this._onReady}/>
                :
                <div className={styles.thumbnail} key={this.state.mediaclick} onClick={this.mediaClick} onMouseEnter={this.playHovering} onMouseLeave={this.playOut}>
                  <VelocityComponent animation={playAnimation}>
                    <div className={styles.playButton}></div>
                  </VelocityComponent>
                  <img src="https://i.ytimg.com/vi/m_ZRWZv14SA/sddefault.jpg" width="275" height="155"/>
                </div>

              }
            </div>
            <div className={styles.voteContainer}>
              <div className={styles.voteLeft}>
                <VelocityComponent animation={arrowAnimationLeft}>
                  <span> > &#160; > &#160; > </span>
                </VelocityComponent>
              </div>
              <VelocityComponent animation={voteAnimation}>
                <button className={styles.voteButton} onMouseDown={this.voteClick} onMouseUp={this.voteClickDone} onMouseEnter={this.whenMouseEntered}
                        onMouseLeave={this.whenMouseLeft}>
                  VOTE
                </button>
              </VelocityComponent>
              <div className={styles.voteRight}>
                <VelocityComponent animation={arrowAnimationRight}>
                  <span>&#60; &#160; &#60; &#160; &#60;</span>
                </VelocityComponent>
              </div>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.stats}>
              <div className={styles.leftStats}>
                <div className={styles.voteCount}>324</div>
                <div className={styles.voteLabel}>TOTAL VOTES</div>
              </div>
              <div className={styles.rightStats}>
                <div className={styles.percentage}>42%</div>
                <div className={styles.percentChart}>
                  <div className={styles.chartEdge}></div>
                  <div className={styles.chartBG}>
                    <div className={styles.chartOverlay} style={chartWidth}></div>
                  </div>
                  <div className={styles.chartEdge}></div>
                </div>
              </div>
            </div>
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
