/**
 * Created JS
 * User: JiangYilong
 * Date: 2018/7/18
 * Time: 14:34
 * Email: jiangyilong@wafersystems.com
 */
import React from 'react';
import {connect} from 'dva'
import Upload from '../../components/More/Upload'

export default connect(state => state)(({dispatch}) => <Upload dispatch={dispatch} />)
