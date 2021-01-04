import './menu.css';
import React from 'react';
import { Menu, Avatar, Dropdown } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';

function UserOperationList() {
  const userOperationListClick = (e) => {
    console.log(e)
  }
  return (
    <Menu onClick={userOperationListClick} selectedKeys={[]} mode="vertical" triggerSubMenuAction="click">
      <Menu.Item key="personalInfo">个人信息</Menu.Item>
      <Menu.Item key="logout">退出</Menu.Item>
    </Menu>
  )
}

class MrMenu extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      firstLevelMenu: '',
      secondLevelMenu: '',
      menuList: [],
      secondLevelMenuDom: null
    }
    this.firstLevelMenuClick = this.firstLevelMenuClick.bind(this)
    this.secondLevelMenuClick = this.secondLevelMenuClick.bind(this)
  }

  firstLevelMenuClick(e) {
    this.setState({ firstLevelMenu: e.key });
    const menuList = this.state.menuList || []
    let secondLevelMenuDom = menuList.find(item => item.key === e.key)
    secondLevelMenuDom = (secondLevelMenuDom.children || []).map(menu => {
      return (
        <Menu.Item key={menu.key}>{menu.name}</Menu.Item>
      )
    })
    this.setState({secondLevelMenuDom})
  };

  secondLevelMenuClick(e) {
    this.setState({ secondLevelMenu: e.key });
  };

  menuLogoClick(e) {
    console.log('menuLogoClick', e)
  }

  getMenuList() {
    fetch('/mock/menu.json').then(res => {
      return res.json()
    }).then(res => {
      this.setState({
        menuList: res || []
      })
    }).catch(error => {
      console.error(error)
    })
  }

  componentDidMount() {
    this.getMenuList()
  }

  render() {
    const { firstLevelMenu, secondLevelMenu, menuList, secondLevelMenuDom } = this.state;
    const firstLevelMenuDom = menuList.map(menu => {
      return (
        <Menu.Item key={menu.key}>{menu.name}</Menu.Item>
      )
    })
    return (
      <>
        <div className="menu">
          <div className="menu-logo" onClick={this.menuLogoClick}></div>
          <Menu onClick={this.firstLevelMenuClick} selectedKeys={[firstLevelMenu]} mode="horizontal" theme="dark" triggerSubMenuAction="click" className="menu__antd-menu">
            {firstLevelMenuDom}
          </Menu>
          <div className="menu__avatarWrap">
            <Avatar icon={<UserOutlined />} />
            <Dropdown overlay={<UserOperationList />}>
              <DownOutlined className="menu__avatar__down" />
            </Dropdown>
          </div>
        </div>
        <div className="submenu">
          <Menu onClick={this.secondLevelMenuClick} style={{ width: 256 }} defaultSelectedKeys={[secondLevelMenu]} mode="inline">
            {secondLevelMenuDom}
          </Menu>
          {this.props.children}
        </div>
      </>
    );
  }

}

export default MrMenu;
