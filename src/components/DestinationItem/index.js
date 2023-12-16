import './index.css'

import App from './App.js'

const eachItemList = props => {
  const {eachItem} = props
  const {name, imgUrl} = eachItem
  return (
    <li>
      <img src={imgUrl} className="image" />
      <h1 className="head">{name}</h1>
    </li>
  )
}
export default eachItemList
