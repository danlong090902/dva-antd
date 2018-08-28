/**
 * Created JS
 * User: JiangYilong
 * Date: 2018/7/16
 * Time: 11:00
 * Email: jiangyilong@wafersystems.com
 */
import React from 'react';
import {connect} from 'dva';
import Carousel from '../components/Carousel'

export default connect(state =>state)(() => <Carousel />)
