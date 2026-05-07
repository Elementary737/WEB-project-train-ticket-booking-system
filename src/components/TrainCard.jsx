function TrainCard({ train }) {
  return (
    <div className="train-card">
      <h2>{train.number}</h2>

      <p>
        {train.from} → {train.to}
      </p>

      <p>Дата: {train.date}</p>

      <p>Відправлення: {train.departure}</p>

      <p>Прибуття: {train.arrival}</p>

      <p>Тривалість: {train.duration}</p>
    </div>
  )
}

export default TrainCard