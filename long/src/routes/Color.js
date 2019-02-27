import React from 'react'
import {connect} from 'dva'
import Amap from '../components/Amap'

export default connect(state => state)(() => <Amap />)
