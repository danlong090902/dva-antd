/**
 * Created JS
 * User: JiangYilong
 * Date: 2018/8/1
 * Time: 15:12
 * Email: jiangyilong@wafersystems.com
 */
import React from 'react';
import {connect} from 'dva';
import Hook from '../components/TestHook/Index'

export default connect(state =>state)(() =><Hook />)
