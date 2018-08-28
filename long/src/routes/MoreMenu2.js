/**
 * Created JS
 * User: JiangYilong
 * Date: 2018/7/12
 * Time: 15:51
 * Email: jiangyilong@wafersystems.com
 */
import React from 'react'
import {connect} from 'dva'
import MoreMenu2 from '../components/moreMenu/MoreMenu2'

export default connect(state => state)(({dispatch,example}) => <MoreMenu2 dispatch={dispatch} example={example} />)
