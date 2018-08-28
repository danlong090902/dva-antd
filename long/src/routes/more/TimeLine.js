/**
 * Created JS
 * User: JiangYilong
 * Date: 2018/7/18
 * Time: 14:34
 * Email: jiangyilong@wafersystems.com
 */
import React from 'react';
import {connect} from 'dva'
import TimeLine from '../../components/More/TimeLine'

export default connect(state => state)(({dispatch}) => <TimeLine dispatch={dispatch} />)
