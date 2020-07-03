import { Layout, Menu } from 'antd';
import * as React from 'react';
import { createUseStyles } from 'react-jss';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { AuthButton } from './components';
import { Boardgames, Home, SeatClaimatorium } from './pages';

const useStyles = createUseStyles({
  header: {
    position: 'sticky',
    top: 0,
    display: 'grid',
    gridTemplateColumns: 'auto 1fr auto',
    zIndex: 1,
  },
  logo: {
    flex: 1,
  },
  sider: {
    '@media (min-width: 767px)': {
      display: 'none',
    },
  },
  menu: {
    '@media (max-width: 767px)': {
      display: 'none',
    },
  },
  content: {
    background: '#fff',
    minHeight: 'calc(100vh - 64px)',
    padding: '0 40px',
  },
});

export function App(): React.ReactElement {
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    <Menu.Item key="/">Übersicht</Menu.Item>,
    <Menu.Item key="/seats">Sitzplan</Menu.Item>,
    <Menu.Item key="/boardgames">Brettspiele</Menu.Item>,
  ];

  return (
    <Layout>
      <Layout.Sider
        breakpoint="md"
        collapsedWidth="0"
        className={classes.sider}
      >
        <Menu
          theme="dark"
          mode="vertical"
          selectedKeys={[location.pathname]}
          onSelect={(selection) => {
            navigate(selection.key);
          }}
        >
          {menuItems}
        </Menu>
      </Layout.Sider>
      <Layout>
        <Layout.Header className={classes.header}>
          <div className={classes.logo} />
          <div>
            <Menu
              theme="dark"
              mode="horizontal"
              selectedKeys={[location.pathname]}
              onSelect={(selection) => {
                navigate(selection.key);
              }}
              className={classes.menu}
            >
              {menuItems}
            </Menu>
          </div>
          <AuthButton />
        </Layout.Header>
        <Layout.Content>
          <div className={classes.content}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/seats" element={<SeatClaimatorium />} />
              <Route path="/boardgames" element={<Boardgames />} />
            </Routes>
          </div>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
