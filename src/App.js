import React, { useState, useEffect } from 'react';
import { Table, ConfigProvider } from 'antd';
import { DownOutlined, RightOutlined } from '@ant-design/icons';
import './App.css';
import triggerData from './data';
import 'antd/dist/reset.css';

function App() {
  const [data, setData] = useState([]);
  const [expandedRows, setExpandedRows] = useState({}); // { [rowKey]: boolean }

  useEffect(() => {
    const sortedData = [...triggerData].sort((a, b) => new Date(a.date) - new Date(b.date));
    setData(sortedData);
  }, []);

  const toggleDescription = (rowKey) => {
    setExpandedRows((prev) => ({
      ...prev,
      [rowKey]: !prev[rowKey],
    }));
  };

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
      width: 300,
      render: (_, record) => {
        const rowKey = record.stockName + record.trigger;
        const isExpanded = expandedRows[rowKey];

        return (
            <div style={{ whiteSpace: 'normal', cursor: 'pointer' }} onClick={() => toggleDescription(rowKey)}>
              <strong style={{ display: 'flex', alignItems: 'center' }}>
                {isExpanded ? <DownOutlined style={{ marginRight: 6 }} /> : <RightOutlined style={{ marginRight: 6 }} />}
                {record.trigger}
              </strong>
              {isExpanded && (
                  <div style={{ marginTop: 6, fontSize: '0.85em', color: '#666' }}>
                    {record.triggerDescription}
                  </div>
              )}
            </div>
        );
      },
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
          <Table
              className="lambo-table"
              dataSource={data}
              columns={columns}
              rowKey={(record) => record.stockName + record.trigger}
              pagination={false}
              scroll={{ x: 'max-content' }}
          />
        </div>
      </ConfigProvider>
  );
}

export default App;
