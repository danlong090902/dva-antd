/**
 * Created JS
 * User: JiangYilong
 * Date: 2018/7/17
 * Time: 17:24
 * Email: jiangyilong@wafersystems.com
 */
import React, { Component } from 'react'
import { connect } from 'dva'
import { withRouter } from 'dva/router'

import MainLayout from '../components/layout/Main'


class App extends Component {
  render() {
    let { children, location,layout,dispatch } = this.props
    return (
      <MainLayout location={location} layout={layout} dispatch={dispatch}>
        {children}
      </MainLayout>
    )
  }
}

App.propTypes = {}

export default withRouter(
  connect(({ app, loading,layout,dispatch }) => ({
    app,
    loading,
    layout,
    dispatch
  }))(App)
)
