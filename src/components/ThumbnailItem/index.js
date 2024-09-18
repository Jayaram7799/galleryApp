// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {thumbnailUrl, thumbnailAltText, updatedId, id} = props
  const onClickButton = () => {
    updatedId(id)
  }
  return (
    <li className="img">
      <button type="button" onClick={onClickButton}>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
