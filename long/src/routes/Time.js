import React from 'react';
import {connect} from 'dva';
import Time from '../components/Time'

export default connect(state => state)(({dispatch,example}) =><Time dispatch={dispatch} example={example} /> )
