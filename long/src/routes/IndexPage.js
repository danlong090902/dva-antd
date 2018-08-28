import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Fmap from 'react-fmap'
import Example from '../components/Example'
   const aaa = [
     [1,2,45,34,235,4,24,22,523,5235,25,2,52,52,5,25,25,25]
   ];

function IndexPage() {
  return (
    <div className={styles.normal}>
      <Example />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
