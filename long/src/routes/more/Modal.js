/**
 * Created JS
 * User: JiangYilong
 * Date: 2018/7/18
 * Time: 14:34
 * Email: jiangyilong@wafersystems.com
 */
import React from 'react';
import {connect} from 'dva'
import Modal from '../../components/More/Modal'

export default connect(state => state)(({dispatch}) => <Modal dispatch={dispatch} />)
