function SeatMap({
  selectedSeats,
  setSelectedSeats,
  bookedSeats,
}) {
  const seats = Array.from(
    { length: 40 },
    (_, i) => i + 1
  )

  const toggleSeat = (seat) => {
    if (bookedSeats.includes(seat)) return

    if (selectedSeats.includes(seat)) {
      setSelectedSeats(
        selectedSeats.filter((s) => s !== seat)
      )
    } else {
      setSelectedSeats([...selectedSeats, seat])
    }
  }

  return (
    <div className="wagon">
      {Array.from({ length: 10 }, (_, coupeIndex) => {
        const start = coupeIndex * 4 + 1

        const coupeSeats = [
          start,
          start + 1,
          start + 2,
          start + 3,
        ]

        return (
          <div
            key={coupeIndex}
            className="coupe"
          >
            {coupeSeats.map((seat) => {
              const isBooked =
                bookedSeats.includes(seat)

              const isSelected =
                selectedSeats.includes(seat)

              let className = 'seat'

              if (isBooked) {
                className += ' booked'
              } else if (isSelected) {
                className += ' selected'
              }

              return (
                <div
                  key={seat}
                  className={className}
                  onClick={() =>
                    toggleSeat(seat)
                  }
                >
                  {seat}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default SeatMap