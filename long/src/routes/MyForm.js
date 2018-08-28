import React from 'react'
import {connect} from 'dva'
import MyForm from '../components/MyForm'


export default connect(state =>state)(({dispatch,example}) => <MyForm dispatch={dispatch} example={example} />)
