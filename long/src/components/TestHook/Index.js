/**
 * Created JS
 * User: JiangYilong
 * Date: 2018/8/1
 * Time: 15:09
 * Email: jiangyilong@wafersystems.com
 */
import React from 'react';
import {Button} from 'antd'

class Index extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data:111
    }
  }

  /**
   * 组件加载完成
   */
  componentDidMount() {
    console.log('componentDidMount')
  }

  /**
   * 组件更新完成
   */
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  /**
   * 组件被移除之前
   */
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  /**
   * 组件正在接受state或者render之前
   * @returns {boolean}
   */
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true
  }

  /**
   * render之前或者初始化组件之前或后续更新之前
   * @returns {null}
   */
  static getDerivedStateFromProps() {
    console.log('static getDerivedStateFromProps');
    return null
  }

  /**
   * 最新的render即将被挂载在dom节点上
   * @returns {null}
   */
  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate');
    return null
  }

  /**
   * 接受错误的钩子
   */
  componentDidCatch() {
    console.log('componentDidCatch');
  }
  render() {
    console.log('render');
    return (
      <div>
        <div>{this.state.data}</div>
        <Button onClick={() => {
          this.setState({
            data:this.state.data+1
          })
        }}>点击</Button>
      </div>
    )
  }
}

export default Index
