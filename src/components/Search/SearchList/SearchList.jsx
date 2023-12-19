import "./SearchList.css";

export function SearchList({ searchInput, prodcutsList }) {
  return (
    <div className="searchList-box-container">
      <div className="style-searchList">
        {!searchInput ? (
          <p className="items-not">Items not fetched..❌</p>
        ) : prodcutsList.length === 0 ? (
          <p className="items-not">Items not available..❌</p>
        ) : (
          <div className="searchList-box">
            {prodcutsList.map((items) => (
              <div className="searchList-box" key={items.id}>
                <ul>
                  <li>
                    <div className="items-list">
                      <div className="img">
                        <img
                          src={`https://i.dummyjson.com/data/products/${items.id}/1.jpg`}
                          alt={items.title}
                        />
                      </div>
                      <div className="item-details">
                        <div className="titlt-wrap">
                          <h1>{items.title}</h1>
                          <p>{items.category}</p>
                        </div>
                        <p className="category">{items.category}</p>
                        <p>{items.description}</p>
                        <button className="price">$ {items.price}</button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
