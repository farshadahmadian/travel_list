import "./Stats.css";

const Stats = function ({ items }) {
  if (!items.length)
    return (
      <footer className="footer">
        Start adding some items to your packing list ...
      </footer>
    );

  const totalItems = items.length;
  const packedItems = items.reduce((accu, currentItem) => {
    return accu + (currentItem.packed ? 1 : 0);
  }, 0);
  const packedItemsPercent = Math.round((packedItems / totalItems) * 100);

  return (
    <footer className="footer">
      <div>
        <span>
          {totalItems === packedItems
            ? "You got everything! Ready to go!"
            : `🧳 You have ${totalItems} items on your list, and you already packed ${packedItems} (${packedItemsPercent}%)`}
        </span>
      </div>
    </footer>
  );
};

export default Stats;
