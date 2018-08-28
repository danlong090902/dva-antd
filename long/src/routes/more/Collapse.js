/**
 * Created JS
 * User: JiangYilong
 * Date: 2018/7/18
 * Time: 14:34
 * Email: jiangyilong@wafersystems.com
 */
import React from 'react';
import {connect} from 'dva'
import Collapse from '../../components/More/Collapse'

export default connect(state => state)(({dispatch}) => <Collapse dispatch={dispatch} />)
