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
      <strong>Hey!</strong> Denna sida visar kommande <strong>aktietriggers</strong> med hög kurspotential. Vi har samlat alla kommande händelser från Discord (Lambo) och Reddit: <a href="https://www.reddit.com/r/ISKbets/" target='_blank'>https://www.reddit.com/r/ISKbets/</a><br />
      Sedan bett Chat-gpt att söka efter mer information och uppskatta möjlig kursuppgång, så allting här bör tas med en stor skopa salt! Kontrollera allting! <br/>
      <br />
      <strong>Vad är en trigger?</strong> <br />
      En kommande händelse som förväntas påverka kursen kraftigt, t.ex.:
      <ul style={{ marginTop: 6, marginBottom: 6, paddingLeft: 20 }}>
        <li><strong>Studieresultat</strong> – Fas I/II/III</li>
        <li><strong>Partneravtal</strong> eller licens</li>
        <li><strong>FDA-besked</strong> eller regulatoriskt godkännande</li>
        <li><strong>Produktlansering</strong> i ny marknad</li>
        <li><strong>Stora ordrar</strong> eller industriella avtal</li>
      </ul>
      <strong>Triggernivåer:</strong> <br />
      <Tag color="default">låg</Tag> 0-10% &nbsp;
      <Tag color="default">mellan</Tag> +10–30% &nbsp;
      <Tag color="volcano">hög</Tag> +30–80% &nbsp;
      <Tag color="red">jättehög</Tag> +80–300% <br />
      <br />
      Välj typ av trigger i filtret nedan för att analysera specifika händelser. 🚀
    </div>
  );
};

export default InfoBox;
