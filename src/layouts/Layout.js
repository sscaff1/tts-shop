import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Typography } from 'antd';
import styles from './Layout.module.css';

const { Header, Sider, Content, Footer } = Layout;
const { Title } = Typography;

const AppLayout = ({ children }) => {
  return (
    <Layout>
      <Header className="header">
        <div className={styles.logo}>
          <Title className={styles.h1}>TTS Shop</Title>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
          <Footer>footer</Footer>
        </Layout>
        <Sider width={200} style={{ background: '#fff' }} />
      </Layout>
    </Layout>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
