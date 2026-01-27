"use client"
import { useEffect, useRef } from "react"
import QRCode from "qrcode"

const Code = () => {
  const canvasRef = useRef(null)

  const url = "https://grime2prime.vercel.app/"
  useEffect(() => {
    if (!canvasRef.current) return

    QRCode.toCanvas(canvasRef.current, url, {
      width: 220,
      margin: 1,
      errorCorrectionLevel: "M",
    })
  }, [url])

  return (
    <div style={{ padding: 24 }}>
      <h1>QR Code</h1>
      <p>{url}</p>
      <canvas ref={canvasRef} />
    </div>
  )
}

export default Code
