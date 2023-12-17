import './index.css'

const DestinationItem = props => {
  const {eachItemList} = props
  const {name, imgUrl} = eachItemList
  return (
    <li>
      <img src={imgUrl} alt={name} className="image" />
      <h1 className="head">{name}</h1>
    </li>
  )
}
export default DestinationItem
