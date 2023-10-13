type LocationsProps = {
  cities: string[];
}

function Locations({cities}: LocationsProps): JSX.Element {
  return (
    <section className="locations container">
    <ul className="locations__list tabs__list">
      {cities.map((city) => {
        return (
      <li className="locations__item">
        <a className="locations__item-link tabs__item" href="#">
          <span>{city}</span>
        </a>
      </li>
        )
      })}
    </ul>
  </section>
  )
}

export default Locations;
