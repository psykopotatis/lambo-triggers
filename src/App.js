import React, { useState, useEffect } from 'react';
import './App.css';
import triggerData from './data';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const sortedData = [...triggerData].sort((a, b) => {
      const dateA = new Date(a.date.split('/').reverse().join('-'));
      const dateB = new Date(b.date.split('/').reverse().join('-'));
      return dateA - dateB;
    });
    setData(sortedData);
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Lambo-triggers 🚀</h1>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">Aktienamn</th>
            <th scope="col">Trigger</th>
            <th scope="col">Uppskattat datum</th>
            <th scope="col">Original Datum</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.stockName}</td>
              <td>{item.trigger}</td>
              <td>{item.date}</td>
              <td>{item.originalDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
