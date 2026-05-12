function BookingForm({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleBooking,
}) {
  return (
    <div className="booking-form">
      <input
        type="text"
        placeholder="Ім’я"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Телефон"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleBooking}>
        Підтвердити бронювання
      </button>
    </div>
  )
}

export default BookingForm