import React, { useState } from "react";
import axios from "axios";

import "./QRCode.css";

export default function QrCode() {
  const [url, setUrl] = useState("");
  const [qrCode, setQrCode] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.post("https://pine-qr-code-generator.onrender.com/scanQr", { url: url }).then((res) => {
      setQrCode(res.data);
      setLoading(false);
    });
    setUrl("");
  };

  const handleReSubmit = (e) => {
    e.preventDefault();
    setQrCode(null);
  };

  return (
    <div className="body">
      <div className="heading">Generate and download QR Code</div>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="inputText"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter the link..."
          required
        />
        <input
          className="Submitbutton"
          type="submit"
          value="Generate QR Code"
        />
      </form>

      {
        loading ? (
          <div class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          </div>
        ):
        false
      }

      {qrCode ? (
        <>
          <div className="QR"  > 
              <img src={qrCode} alt="QrCode" />
              <p>Scan the QR code to access data </p>
              <button className="downloadBtn" ><a href={qrCode} download> Download QR Code</a></button>
              <button className="NewBtn" type="button" onClick={(e) => handleReSubmit(e)}>
                Make New QR Code
              </button>
          </div>
        </>
      ) : null}
    </div>
  );
}
