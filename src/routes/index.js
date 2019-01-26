import React from 'react';
import {Icon, Layout, Menu} from 'antd';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../containers/Home";
import Sample from "../containers/Sample";
import {browserHistory} from 'react-router';

const {
    Header, Content, Footer, Sider,
} = Layout;

function linkTo(item) {
    browserHistory.push(item.key);
}

const Routes = () => (
    <Router>
        <Layout style={{height: '100%'}}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div style={{height: '32px', margin: '16px', background: 'rgba(255,255,255,.2)'}}/>
                <Menu theme="dark" mode="inline"
                      defaultSelectedKeys={['1']} onClick={linkTo}>
                    <Menu.Item key="1">
                        <Icon type="user"/>
                        <span className="nav-text">主页</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{background: '#fff', padding: 0}}/>
                <Content style={{margin: '24px 16px 0'}}>
                    <div style={{overflow: 'scroll', padding: 24, background: '#fff', minHeight: 360}}>
                        <div>
                            <Switch>
                                <Route path="/" exact component={Home}/>
                                <Route path="/sample" exact component={Sample}/>
                            </Switch>
                        </div>

                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    </Router>
);

export default Routes;
