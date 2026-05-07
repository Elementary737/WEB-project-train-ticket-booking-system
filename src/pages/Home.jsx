import { useState } from 'react'
import trainsData from '../data/trains'
import TrainList from '../components/TrainList'

function Home() {
  const [search, setSearch] = useState('')
  const [selectedDate, setSelectedDate] = useState('')

  const today = new Date().toISOString().split('T')[0]

  const filteredTrains = trainsData.filter((train) => {
    const matchesSearch =
      train.number.toLowerCase().includes(search.toLowerCase()) ||
      train.from.toLowerCase().includes(search.toLowerCase()) ||
      train.to.toLowerCase().includes(search.toLowerCase())

    const matchesDate =
      selectedDate === '' || train.date === selectedDate

    return matchesSearch && matchesDate
  })

  return (
    <div className="container">
      <h1>Система продажу квитків</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Пошук за містом або номером..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        <input
          type="date"
          value={selectedDate}
          min={today}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="date-input"
        />
      </div>

      <TrainList trains={filteredTrains} />
    </div>
  )
}

export default Home