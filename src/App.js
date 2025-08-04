import React, { useState, useEffect } from 'react';
import { Table, ConfigProvider, Tag, Select } from 'antd';
import { DownOutlined, RightOutlined } from '@ant-design/icons';
import './App.css';
import triggerData from './data';
import 'antd/dist/reset.css';
import InfoBox from './infobox';
import Footer from './footer';

const { Option } = Select;

function App() {
  const [data, setData] = useState([]);
  const [expandedRows, setExpandedRows] = useState({}); // { [rowKey]: boolean }
  const [filteredData, setFilteredData] = useState([]);
  const [triggerTypeFilter, setTriggerTypeFilter] = useState('all');

  useEffect(() => {
    const sortedData = [...triggerData].sort((a, b) => new Date(a.date) - new Date(b.date));
    setData(sortedData);
    setFilteredData(sortedData);
  }, []);

  const toggleDescription = (rowKey) => {
    setExpandedRows((prev) => ({
      ...prev,
      [rowKey]: !prev[rowKey],
    }));
  };

  const handleFilterChange = (value) => {
    setTriggerTypeFilter(value);
    if (value === 'all') {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) => item.triggerType === value);
      setFilteredData(filtered);
    }
  };

  const triggerTypeCounts = triggerData.reduce((acc, item) => {
    acc[item.triggerType] = (acc[item.triggerType] || 0) + 1;
    return acc;
  }, {});

  const triggerTypes = [
    { type: 'all', count: triggerData.length },
    ...Object.entries(triggerTypeCounts).map(([type, count]) => ({ type, count })),
  ];

  const columns = [
    {
      title: 'Aktienamn',
      dataIndex: 'stockName',
      key: 'stockName',
      sorter: (a, b) => a.stockName.localeCompare(b.stockName),
    },
    {
      title: 'Trigger',
      dataIndex: 'trigger',
      key: 'trigger',
      width: 500,
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
      render: (text) => {
        let color = 'default';
        if (text === 'hög') {
          color = 'volcano';
        } else if (text === 'jättehög') {
          color = 'red';
        } else if (text === 'medelhög') {
          color = 'orange';
        }
        return <Tag color={color}>{text}</Tag>;
      },
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
    }
  ];

  return (
      <ConfigProvider>
        <div className="container mt-5">
          <h1 className="text-center mb-4">Aktietriggers! 🚀</h1>
          <InfoBox />
          <div style={{ marginBottom: 16 }}>
            Filters: <br/>
            <Select
              defaultValue="all"
              style={{ width: 200 }}
              onChange={handleFilterChange}
            >
              {triggerTypes.map(({ type, count }) => (
                <Option key={type} value={type}>
                  {type === 'all' ? `Alla triggers (${count})` : `${type} (${count})`}
                </Option>
              ))}
            </Select>
          </div>
          <Table
              className="lambo-table"
              dataSource={filteredData}
              columns={columns}
              rowKey={(record) => record.stockName + record.trigger}
              pagination={false}
              scroll={{ x: 'max-content' }}
          />
          <Footer />
        </div>
      </ConfigProvider>
  );
}

export default App;
