/**
 * Created JS
 * User: JiangYilong
 * Date: 2018/7/13
 * Time: 14:27
 * Email: jiangyilong@wafersystems.com
 */
import React from 'react';
import {connect} from 'dva';
import Tree from '../components/Tree'


export default connect(state => state)(({dispatch,example}) => <Tree dispatch={dispatch} example={example} />)
