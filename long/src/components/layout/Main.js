/**
 * Created JS
 * User: JiangYilong
 * Date: 2018/7/16
 * Time: 9:53
 * Email: jiangyilong@wafersystems.com
 */
import React from 'react';
import { Layout } from 'antd';
import  styles from './layout.less';
import LeftMenu from './Menu'

const { Header, Content } = Layout;

class Main extends React.Component {
  state = {
    collapsed: false,
  };

  render() {
    const children =this.props.children;
    return (
      <Layout>
        <LeftMenu toggle={this.state.collapsed} layout={this.props.layout} dispatch={this.props.dispatch} />
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>

          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default Main
