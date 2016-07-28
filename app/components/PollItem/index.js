import React from 'react';
import styles from './styles.css';

export default class PollItem extends React.Component { // eslint-disable-line
  render() {
    return (
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
          <div className={styles.title}>Young The Giant<br/>Something To Believe In </div>
          <div className={styles.media}>Media</div>
          <div className={styles.voteContainer}>
            <div className={styles.voteLeft}> > > > </div>
            <div className={styles.voteButton}>Vote</div>
            <div className={styles.voteRight}> &#60; &#60; &#60; </div>
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
    );
  }
}
