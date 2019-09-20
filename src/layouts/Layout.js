import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Typography } from 'antd';
import { Link } from '@reach/router';
import Cart from 'components/cart/Cart';
import styles from './Layout.module.css';

const { Header, Sider, Content, Footer } = Layout;
const { Title } = Typography;

const AppLayout = ({ children }) => {
  return (
    <Layout>
      <Header className="header">
        <div className={styles.logo}>
          <Link to="/">
            <Title className={styles.h1}>TTS Shop</Title>
          </Link>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ lineHeight: '64px' }}
          selectedKeys={[]}
        >
          <Menu.Item key="create-products">
            <Link to="/create-products">Create Products</Link>
          </Menu.Item>
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
        <Sider width={400} style={{ background: '#fff' }}>
          <Cart />
        </Sider>
      </Layout>
    </Layout>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
