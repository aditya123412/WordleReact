import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'

export class Home extends PureComponent {
  render() {
    return (
      <>
        <h3>Welcome to games menu!</h3>
        <ul>
            <li>
                <NavLink to={'/wordle'}>Wordle</NavLink>
            </li>
        </ul>
      </>
    )
  }
}

export default Home