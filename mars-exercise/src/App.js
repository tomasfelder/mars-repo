import React from 'react'
import { Comp1 } from './pages/LiveGameTable';

import data from './store/store.js'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: data
    }
  }

  render() {
    return (
      <div
        className="page-container"
      >
        <Comp1
          data={this.state.data}
        />
      </div>
    )
  }
}

export default App