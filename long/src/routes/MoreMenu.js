/**
 * Created JS
 * User: JiangYilong
 * Date: 2018/7/18
 * Time: 10:30
 * Email: jiangyilong@wafersystems.com
 */
import React from 'react'
import {connect} from 'dva'
import MoreMenu from '../components/moreMenu/MoreMenu'
import { withRouter } from 'dva/router'

class MyApp extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let { children, location,layout,dispatch } = this.props
    return (
      <MoreMenu dispatch={dispatch}>
        {children}
      </MoreMenu>
    )
  }
}
MyApp.propTypes = {}

export default withRouter(
  connect(({ app, loading,layout,dispatch }) => ({
    app,
    loading,
    layout,
    dispatch
  }))(MyApp)
)
