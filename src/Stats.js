export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">Start adding some items to your packing list 🗒️</p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const pctPacked = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {pctPacked === 100
          ? "You've got everything! Ready to go ✈️"
          : `🧳 You have ${numItems} items on your list, and you've already packed ${numPacked} (${pctPacked}%)`}
      </em>
    </footer>
  );
}
