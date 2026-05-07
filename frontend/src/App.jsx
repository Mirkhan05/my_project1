import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    // URL твоего локального Django
    axios.get('http://127.0.0.1:8000/api/products/items/')
      .then(response => {
        setProducts(response.data)
      })
      .catch(err => {
        console.error(err)
        setError("Не удалось загрузить товары. Проверь CORS!")
      })
  }, [])

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Магазин (React + DRF)</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <div style={{ display: 'grid', gap: '10px' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>Цена:</strong> {product.price} руб.</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App