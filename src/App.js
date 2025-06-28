import React, { useState, useEffect } from 'react';
import { Table, ConfigProvider } from 'antd';
import './App.css';
import triggerData from './data';
import 'antd/dist/reset.css'; // Import Ant Design styles

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

  const columns = [
    {
      title: 'Aktienamn',
      dataIndex: 'stockName',
      key: 'stockName',
    },
    {
      title: 'Trigger',
      dataIndex: 'trigger',
      key: 'trigger',
    },
    {
      title: 'Impact',
      dataIndex: 'triggerImpact',
      key: 'triggerImpact',
    },
    {
      title: 'Impact %',
      dataIndex: 'triggerImpactPercentage',
      key: 'triggerImpactPercentage',
    },
    {
      title: 'Uppskattat datum',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Original Datum',
      dataIndex: 'originalDate',
      key: 'originalDate',
    },
  ];

  return (
    <ConfigProvider>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Lambo-triggers 🚀</h1>
        <Table dataSource={data} columns={columns} rowKey="stockName" pagination={false} scroll={{ x: 'max-content' }} />
      </div>
    </ConfigProvider>
  );
}

export default App;
