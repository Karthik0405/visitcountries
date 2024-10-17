import './index.css'

const CountriesItem = props => {
  const {eachItem, onClickChangeVisit} = props
  const {id, name, isVisited} = eachItem

  const gettingCountriId = () => {
    onClickChangeVisit(id)
  }

  return (
    <li className="countries-item-container">
      <p className="countrie-name">{name}</p>
      {isVisited ? (
        <p className="visited">Visited</p>
      ) : (
        <button
          type="button"
          className="visit-button"
          onClick={gettingCountriId}
        >
          Visit
        </button>
      )}
    </li>
  )
}

export default CountriesItem
