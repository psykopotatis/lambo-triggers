// src/components/InfoBox.js
import React from 'react';
import { Tag } from 'antd';

const InfoBox = () => {
  return (
    <div
      style={{
        backgroundColor: '#f6f8fa',
        border: '1px solid #d9d9d9',
        borderRadius: 8,
        padding: 16,
        marginBottom: 24,
        fontSize: '0.95em',
        lineHeight: 1.6,
      }}
    >
      <strong>Hey!</strong> Kommande <strong>aktietriggers</strong> med hög kurspotential.
    </div>
  );
};

export default InfoBox;
