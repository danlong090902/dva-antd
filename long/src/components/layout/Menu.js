/**
 * Created JS
 * User: JiangYilong
 * Date: 2018/7/16
 * Time: 9:53
 * Email: jiangyilong@wafersystems.com
 */
import React from 'react';
import {Layout, Menu, Icon} from 'antd'
import {Link} from 'dva/router'

const {Sider} = Layout
const {SubMenu} = Menu
export default ({toggle, layout, dispatch}) => {
  const collapsed = layout.toggle;
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div className="logo"/>
      <Icon
        className="trigger"
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={() => dispatch({type: 'layout/setState', payload: {toggle: !layout.toggle}})}
        style={{color: '#fff', position: 'relative', left: '40%'}}
      />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="/map">
          <Link to='/map'>
            <Icon type="user"/>
            <span>地图</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/car">
          <Link to='/car'>
            <Icon type="video-camera"/>
            <span>走马灯</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/hook">
          <Link to='/hook'>
            <Icon type="video-camera"/>
            <span>钩子函数</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/chart">
          <Link to='/chart'>
            <Icon type="upload"/>
            <span>图表</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/form">
          <Link to='/form'>
            <Icon type="upload"/>
            <span>表单</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/time">
          <Link to='/time'>
            <Icon type="upload"/>
            <span>时间</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/tree">
          <Link to='/tree'>
            <Icon type="upload"/>
            <span>树形控件</span>
          </Link>
        </Menu.Item>
        <SubMenu key="sub" title={<span><Icon type="laptop"/>二级菜单</span>}>
          <Menu.Item key="/more1">
            <Link to='/more1'>
              <Icon type="upload"/>
              <span>二级一</span>
            </Link>
          </Menu.Item>
          <SubMenu key='sub1' title={<span><Icon type='laptop'/>三级菜单</span>}>
            <Menu.Item key="/more2">
              <Link to='/more2'>
                <Icon type="upload"/>
                <span>三级一</span>
              </Link>
            </Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key='sub2' title={<span><Icon type='laptop'/>更多</span>}>
          <Menu.Item key="/rate">
            <Link to='/rate'>
              <Icon type="upload"/>
              <span>评价</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/slider">
            <Link to='/slider'>
              <Icon type="upload"/>
              <span>滑块</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/transfers">
            <Link to='/transfers'>
              <Icon type="upload"/>
              <span>穿梭框</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/upload">
            <Link to='/upload'>
              <Icon type="upload"/>
              <span>上传</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/card">
            <Link to='/card'>
              <Icon type="upload"/>
              <span>卡片</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/collapse">
            <Link to='/collapse'>
              <Icon type="upload"/>
              <span>折叠面板</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/tabs">
            <Link to='/tabs'>
              <Icon type="upload"/>
              <span>标签页</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/timeLine">
            <Link to='/timeLine'>
              <Icon type="upload"/>
              <span>时间线</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/drawer">
            <Link to='/drawer'>
              <Icon type="upload"/>
              <span>抽屉</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/modal">
            <Link to='/modal'>
              <Icon type="upload"/>
              <span>模态框</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/bizChart">
            <Link to='/bizChart'>
              <Icon type="upload"/>
              <span>图表</span>
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  )
}
