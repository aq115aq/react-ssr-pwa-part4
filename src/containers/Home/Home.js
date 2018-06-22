import * as React from 'react'
import { NavLink } from 'react-router-dom'

class Home extends React.PureComponent {
  componentWillMount () {
    this.props.getInfo()
  }

  render () {
    const unLogin = (
      <div>
        <h1>未登录</h1>
        <NavLink to="/login">
          <button>去登陆</button>
        </NavLink>
        <p>{this.props.info}</p>
      </div>
    )

    const isLogined = (
      <div>
        <h1>已登录</h1>
        <button onClick={this.props.logout}>退出登录</button>
        <p>{this.props.info}</p>
      </div>
    )

    if (this.props.isLogined) {
      return isLogined
    } else {
      return unLogin
    }
  }
}
export default Home