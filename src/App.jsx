import { useState, useEffect } from 'react'
import { ItemsDataAPI } from './ItemsDataAPI';

const App = () => {
  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState('')

  useEffect(() => {
    const itemResponse = ItemsDataAPI()
    setItems(itemResponse)
  }, [])

  const addNewItem = () => {
    setItems([...items, {id: items.length + 1, name: newItem}])
    setNewItem('')
  }

  return (
    <>
      <input type="text" placeholder='Item name' value={newItem} onChange={(event) => setNewItem(event.target.value)} />

      <button onClick={addNewItem}>Add Item</button>

      {items.length > 0 ?
        <ul>{items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}</ul>
        : console.log('still loading')}
    </>
  )
}

export default App
