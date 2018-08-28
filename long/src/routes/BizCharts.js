/**
 * Created JS
 * User: JiangYilong
 * Date: 2018/8/6
 * Time: 14:27
 * Email: jiangyilong@wafersystems.com
 */
import React from 'react';
import {connect} from 'dva';
import Bizcharts from '../components/BizCharts'
export default connect(state => state)((state) =><Bizcharts state={state} />)
