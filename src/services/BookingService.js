export const saveBooking = (trainId, wagon, seats, userData) => {
  const existingBookings =
    JSON.parse(localStorage.getItem('bookings')) || []

  const newBooking = {
    trainId,
    wagon,
    seats,
    userData,
  }

  existingBookings.push(newBooking)

  localStorage.setItem(
    'bookings',
    JSON.stringify(existingBookings)
  )
}

export const getBookedSeats = (trainId, wagon) => {
  const bookings =
    JSON.parse(localStorage.getItem('bookings')) || []

  return bookings
    .filter(
      (booking) =>
        booking.trainId === trainId &&
        booking.wagon === wagon
    )
    .flatMap((booking) => booking.seats)
}