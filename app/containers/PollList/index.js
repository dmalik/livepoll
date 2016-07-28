import React from 'react';
import styles from './styles.css';
import PollItem from 'components/PollItem';

export default class PollList extends React.Component { // eslint-disable-line
  render() {
    return (
      <div className={styles.pollListBg}>
        <PollItem />
        <PollItem />
        <PollItem />
        <PollItem />
      </div>
    );
  }
}
