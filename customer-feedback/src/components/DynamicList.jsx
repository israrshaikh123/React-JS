function DynamicList({ items, onAdd, onRemove, onUpdate, placeholder }) {
  return (
    <>
      <div className="flex flex-col gap-2">
        {items.map((item, index) => (
          <div key={index} className="flex gap-2">
            <input
              value={item}
              onChange={(e) => onUpdate(index, e.target.value)}
              placeholder={`${placeholder} ${index + 1}`}
              className="flex-1 bg-gray-700 text-white rounded-lg p-2 outline-none"
            />
            <button
              type="button"
              onClick={() => onRemove(index)}
              className="bg-red-600 hover:bg-red-700 text-white px-3 rounded-lg"
            >
              Remove
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={onAdd}
          className="bg-gray-600 hover:bg-gray-500 text-white rounded-lg p-2"
        >
          + Add {placeholder}
        </button>
      </div>
    </>
  );
}

export default DynamicList;
