/**
 * Created JS
 * User: JiangYilong
 * Date: 2018/7/12
 * Time: 15:51
 * Email: jiangyilong@wafersystems.com
 */
import React from 'react'
import {connect} from 'dva'
import Charts from '../components/Charts'

export default connect(state => state)(({dispatch,example}) => <Charts dispatch={dispatch} example={example} />)
