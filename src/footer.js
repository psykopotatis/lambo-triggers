// src/components/Footer.js
import React from 'react';
import { Tag } from 'antd';

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: '#f6f8fa',
        border: '1px solid #d9d9d9',
        borderRadius: 8,
        padding: 16,
        marginTop: 24,
        marginBottom: 44,
        fontSize: '0.95em',
        lineHeight: 1.6,
      }}
    >
      <strong>Ansvarsfriskrivning </strong><br/>
      <br />
      <p>Dessa analyser är endast avsedd för informationssyften. Innehållet återspeglar författarens och Chat-gpts egna åsikter och tolkningar, baserade på offentligt tillgänglig information. Detta är inte investeringsrådgivning. Det är inte en rekommendation att köpa, sälja eller behålla någon specifik värdepapper. Felaktigheter kan förekomma.</p>
    </div>
  );
};

export default Footer;
