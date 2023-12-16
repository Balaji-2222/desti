import {Component} from 'react'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  render() {
    return (
      <div className="bgContainer">
        <h1 className="heading">Destination Search</h1>
        <DestinationItem />
      </div>
    )
  }
}

export default DestinationSearch
