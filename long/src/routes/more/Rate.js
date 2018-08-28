/**
 * Created JS
 * User: JiangYilong
 * Date: 2018/7/18
 * Time: 13:57
 * Email: jiangyilong@wafersystems.com
 */
import React from 'react';
import {connect} from 'dva'
import Rate from '../../components/More/Rate'

export default connect(state =>state)(({dispatch}) => <Rate dispatch={dispatch} />)
