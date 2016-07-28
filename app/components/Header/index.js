import React from 'react';

import MegaphoneIcon from '../MegaphoneIcon';
import styles from './styles.css';

function Header(props) {
  return (
    <header>
      <div className={styles.headerSection}>
        <div className={styles.iconBox}><MegaphoneIcon size="3em" /> </div>
        <div className={styles.arrowBox}> > </div>
        <div className={styles.questionBox}>{props.question}</div>
      </div>
    </header>
  );
}


Header.propTypes = {
  question: React.PropTypes.string,
};

export default Header;
