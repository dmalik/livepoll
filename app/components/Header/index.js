import React from 'react';

import MegaphoneIcon from '../MegaphoneIcon';
import styles from './styles.css';

function Header() {
  return (
    <header>
      <div className={styles.headerSection}>
        <div className={styles.iconBox}><MegaphoneIcon size="3em"/></div>
        <div className={styles.arrowBox}> > </div>
        <div className={styles.questionBox}>What is your choice for the top alt rock song of 2016?</div>
      </div>
    </header>
  );
}

export default Header;


//<MegaphoneIcon className={styles.megaphoneIcon}/>