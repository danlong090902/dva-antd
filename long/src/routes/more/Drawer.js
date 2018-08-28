/**
 * Created JS
 * User: JiangYilong
 * Date: 2018/7/18
 * Time: 15:20
 * Email: jiangyilong@wafersystems.com
 */
import React from 'react';
import {connect} from 'dva'
import Drawer from '../../components/More/Drawer'

export default connect(state =>state)(({dispatch}) => <Drawer dispatch={dispatch} />)
