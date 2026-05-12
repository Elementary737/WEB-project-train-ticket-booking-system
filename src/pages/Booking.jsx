import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import trains from '../data/trains'

import WagonSelector from '../components/WagonSelector'
import SeatMap from '../components/SeatMap'
import BookingForm from '../components/BookingForm'

import {
  saveBooking,
  getBookedSeats,
} from '../services/BookingService'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Booking() {
  const { trainId } = useParams()

  const train = trains.find(
    (t) => t.id === Number(trainId)
  )

  const [selectedWagon, setSelectedWagon] =
    useState(1)

  const [selectedSeats, setSelectedSeats] =
    useState([])

  const [bookedSeats, setBookedSeats] =
    useState([])

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    const seats = getBookedSeats(
      train.id,
      selectedWagon
    )

    setBookedSeats(seats)
    setSelectedSeats([])
  }, [selectedWagon, train.id])

  const handleBooking = () => {
    const emailRegex =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const phoneRegex =
  /^\+?[0-9]{10,13}$/

if (
  !name ||
  !phone ||
  !email ||
  selectedSeats.length === 0
) {
  toast.error('Заповніть всі поля')
  return
}

if (!emailRegex.test(email)) {
  toast.error('Некоректний email')
  return
}

if (!phoneRegex.test(phone)) {
  toast.error('Некоректний номер телефону')
  return
}

    saveBooking(
      train.id,
      selectedWagon,
      selectedSeats,
      {
        name,
        phone,
        email,
      }
    )

    toast.success('Квитки успішно заброньовано')

    setBookedSeats([
      ...bookedSeats,
      ...selectedSeats,
    ])

    setSelectedSeats([])

    setName('')
    setPhone('')
    setEmail('')
  }

  return (
    <div className="container">
      <h1>
        {train.number} {train.from} → {train.to}
      </h1>

      <WagonSelector
        selectedWagon={selectedWagon}
        setSelectedWagon={setSelectedWagon}
      />

      <SeatMap
        selectedSeats={selectedSeats}
        setSelectedSeats={setSelectedSeats}
        bookedSeats={bookedSeats}
      />

      <BookingForm
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        handleBooking={handleBooking}
      />

      <ToastContainer />
    </div>
  )
}

export default Booking