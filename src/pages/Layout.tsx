import React, { PureComponent } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export class Layout extends PureComponent {
  render() {
    return (
      <>
        <h1>React Games</h1>
        <NavLink to={'/'}>...back to home page</NavLink>
        <Outlet></Outlet>
      </>
    )
  }
}

export default Layout