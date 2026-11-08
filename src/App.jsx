import { useState } from 'react';

function App() {
  const [products] = useState([
    { id: 1, name: "Modul Belajar HTML & CSS Dasar", price: 50000, category: "E-Book" },
    { id: 2, name: "Panduan Mahir JavaScript Modern", price: 75000, category: "E-Book" },
    { id: 3, name: "Mastering React dari Nol", price: 100000, category: "Video Course" },
    { id: 3, name: "Mastering React dari Nol", price: 100000, category: "Video Course" },
    { id: 3, name: "Mastering React dari Nol", price: 100000, category: "Video Course" },
  ]);

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-4">Toko Modul & E-Book</h1>

      {/* Grid Layout dari Bootstrap */}
      <div className="row">
        {products.map((item) => (
          <div className="col-md-4 mb-3" key={item.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <span className="badge bg-secondary mb-2 align-self-start">{item.category}</span>
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text text-success fw-bold">Rp {item.price.toLocaleString()}</p>
                <button className="btn btn-primary mt-auto">Beli Modul</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;