/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Helmet from 'react-helmet';

import styles from './styles.css'

import Header from 'components/Header';
import PollList from 'containers/PollList';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className={styles.container}>
        <Helmet
          titleTemplate="%s - Live Poll"
          defaultTitle="Live Poll"
          meta={[
            { name: 'description', content: 'A live poll sample application' },
          ]}
        />
        <Header question={'What is your choice for the top alt rock song for the summer of 2016?'} />
        <PollList />
      </div>
    );
  }
}
