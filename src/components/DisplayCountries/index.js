import './index.css'

const DisplayCountries = props => {
  const {eachItem, onClickChangeVisit} = props
  const {id, name, imageUrl} = eachItem
  const gettingCountriId = () => {
    onClickChangeVisit(id)
  }
  return (
    <li className="country-item">
      <img src={imageUrl} alt="thumbnail" className="countrie-img" />
      <div className="name-button-container">
        <p className="country-name">{name}</p>
        <button
          type="button"
          className="remove-button"
          onClick={gettingCountriId}
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default DisplayCountries
