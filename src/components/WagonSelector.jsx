function WagonSelector({ selectedWagon, setSelectedWagon }) {
  const wagons = [1, 2, 3, 4, 5]

  return (
    <div className="wagon-selector">
      {wagons.map((wagon) => (
        <button
          key={wagon}
          className={
            selectedWagon === wagon
              ? 'wagon-button active'
              : 'wagon-button'
          }
          onClick={() => setSelectedWagon(wagon)}
        >
          Вагон {wagon}
        </button>
      ))}
    </div>
  )
}

export default WagonSelector