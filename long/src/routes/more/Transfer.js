/**
 * Created JS
 * User: JiangYilong
 * Date: 2018/7/18
 * Time: 14:12
 * Email: jiangyilong@wafersystems.com
 */
import React from 'react';
import {connect} from 'dva';
import LongTransfer from '../../components/More/Transfer';

export default connect(state => state)(({dispatch}) => <LongTransfer dispatch={dispatch}  />)
