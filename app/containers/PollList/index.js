import React from 'react';
import styles from './styles.css';
import PollItem from 'components/PollItem';

import VelocityTransitionGroup  from 'velocity-react/velocity-transition-group';
import velocityHelpers  from 'velocity-react/velocity-helpers';

let Animations = {
  // Register these with UI Pack so that we can use stagger later.
  In: velocityHelpers.registerEffect({
    calls: [
      [{
        transformPerspective: [800, 800],
        transformOriginX: ['50%', '50%'],
        transformOriginY: ['100%', '300%'],
        marginBottom: 0,
        opacity: 1,
        rotateX: [0, 90],
      }, 1, {
        easing: 'ease-out',
        display: 'flex',
      }]
    ],
  }),

  Out: velocityHelpers.registerEffect({
    calls: [
      [{
        transformPerspective: [800, 800],
        transformOriginX: ['50%', '50%'],
        transformOriginY: ['0%', '0%'],
        marginBottom: -30,
        opacity: 0,
        rotateX: -70,
      }, 1, {
        easing: 'ease-out',
        display: 'flex',
      }]
    ],
  }),
};


export default class PollList extends React.Component { // eslint-disable-line
  constructor() {
    super();
    this.state = {itemCount: 0, items: [], duration: 200};
  }

  render() {

    const enterAnimation = {
      animation: Animations.In,
      stagger: this.state.duration,
      duration: this.state.duration,
      backwards: false,
      display: 'block',
    };

    const leaveAnimation = {
      animation: Animations.Out,
      stagger: this.state.duration,
      duration: this.state.duration,
      backwards: true,
    };

    return (
      <div className={styles.pollListBg}>
        <VelocityTransitionGroup
          component="div"
          className={styles.pollItems}
          enter={enterAnimation}
          leave={leaveAnimation}
          runOnMount={true}>
          <PollItem />
          <PollItem />
          <PollItem />
          <PollItem />
          <PollItem />
        </VelocityTransitionGroup>
      </div>
    );
  }
}
