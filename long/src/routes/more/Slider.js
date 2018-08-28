/**
 * Created JS
 * User: JiangYilong
 * Date: 2018/7/18
 * Time: 14:04
 * Email: jiangyilong@wafersystems.com
 */
import React from 'react';
import {connect} from 'dva';
import Slider from '../../components/More/Slider'

export default connect(state => state)(({dispatch}) => <Slider dispatch={dispatch} />)
