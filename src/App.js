import { useState } from 'react';
import { Logo } from './Logo.js';
import { Form } from './Form.js';
import { PackingList } from './PackingList.js';
import { Stats } from './Stats.js';

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleDeleteAllItems() {
    const confirmed = window.confirm(
      'Are you sure you want to delete all items?'
    );

    if (confirmed) setItems([]);
  }

  /**
   * Toggles whether an item is packed
   * @param {number} id - The id of the item
   */
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onDeleteAllItems={handleDeleteAllItems}
      />
      <Stats items={items} />
    </div>
  );
}
