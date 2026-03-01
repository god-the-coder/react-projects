import { useState, useEffect } from 'react'
import './App.css'
// im using useState to change frontend state and useEffect to track dependencies
const currencies = ["usd","inr","eur","gbp","jpy","aud","cad","chf","cny","aed","aed","afn","all","amd","ang","aoa","ars","awg","azn","bam","bbd","bdt","bgn","bhd","bif","bmd","bnd","bob","brl","bsd","btn","bwp","byn","bzd","cdf","clf","clp","cnh","cop","crc","cup","cve","czk","djf","dkk","dop","dzd","egp","ern","etb","fjd","fkp","fok","gel","ggp","ghs","gip","gmd","gnf","gtq","gyd","hkd","hnl","hrk","htg","huf","idr","ils","imp","iqd","irr","isk","jep","jmd","jod","kes","kgs","khr","kid","kmf","krw","kwd","kyd","kzt","lak","lbp","lkr","lrd","lsl","lyd","mad","mdl","mga","mkd","mmk","mnt","mop","mru","mur","mvr","mwk","mxn","myr","mzn","nad","ngn","nio","nok","npr","nzd","omr","pab","pen","pgk","php","pkr","pln","pyg","qar","ron","rsd","rub","rwf","sar","sbd","scr","sdg","sek","sgd","shp","sle","sll","sos","srd","ssp","stn","syp","szl","thb","tjs","tmt","tnd","top","try","ttd","tvd","twd","tzs","uah","ugx","uyu","uzs","ves","vnd","vuv","wst","xaf","xcd","xcg","xdr","xof","xpf","yer","zar","zmw","zwg","zwl"];
// this is array will not be created on every re-render that's why im keeping it out from function
function swap() {
  
}

export default function App() {

  const [dataIn, setDataIn] = useState(0);
  const [dataOut, setDataOut] = useState(0);
  const [typeIn, setTypeIn] = useState("USD");
  const [typeOut, setTypeOut] = useState("INR");
  const [rates, setRates] = useState({});

  useEffect(() => {
    const fetchrates = async () => {
      const res = await fetch(`https://v6.exchangerate-api.com/v6/3077e5f126025bcfc641071f/latest/${typeIn.toUpperCase()}`);
      const data = await res.json();
      setRates(data.conversion_rates);
    }

    fetchrates();
  }, [typeIn])

  useEffect(() => {
    // console.log(dataIn);
    // console.log(dataOut);
    // console.log(typeIn);
    // console.log(typeOut);
    if (rates[typeOut.toUpperCase()]) {
      setDataOut((dataIn*rates[typeOut]).toFixed(2));
    }
  }, [rates, dataIn, typeOut]);


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] via-[#0d2144] to-[#0a1628] relative overflow-hidden">
      {/* Background grid lines */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400 rounded-full opacity-5 blur-3xl" />

      {/* Card */}
      <div
        className="relative z-10 w-full max-w-md mx-4"
        style={{
          background: "rgba(255,255,255,0.06)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "20px",
          padding: "6px",
          boxShadow: "0 25px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
      >
        <div className="rounded-2xl overflow-hidden">

          {/* FROM PANEL */}
          <div className="px-6 pt-5 pb-6" style={{ background: "rgba(255,255,255,0.95)" }}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#94a3b8", fontFamily: "'DM Mono', monospace" }}>
                From
              </span>
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#94a3b8", fontFamily: "'DM Mono', monospace" }}>
                Currency Type
              </span>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="number"
                
                value={dataIn}
                onChange={((e) => { setDataIn(e.target.value) })}
                className="flex-1 text-3xl font-light outline-none bg-transparent text-slate-800 w-0"
                style={{ fontFamily: "'DM Mono', monospace" }}
              />
              <div className="relative">
                <select
                  
                  value={typeIn}
                  onChange={((e) => { setTypeIn((e.target.value).toUpperCase())})}
                  className="appearance-none pl-4 pr-9 py-2.5 rounded-xl text-sm font-semibold uppercase outline-none cursor-pointer"
                  style={{
                    background: "#f1f5f9",
                    color: "#334155",
                    border: "1.5px solid #e2e8f0",
                    fontFamily: "'DM Mono', monospace",
                    letterSpacing: "0.05em",
                  }}
                >
                  {currencies.map((c) => (
                    <option key={c.toUpperCase()} value={c.toUpperCase()}>{c.toUpperCase()}</option>
                  ))}
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 4l4 4 4-4" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* SWAP DIVIDER */}
          <div className="relative flex items-center justify-center h-0">
            <div
              className="absolute w-full"
              style={{ height: "2px", background: "linear-gradient(90deg, transparent, #3b82f6, #06b6d4, #3b82f6, transparent)" }}
            />
            <button
              className="relative z-10 px-6 py-2.5 text-white text-sm font-bold rounded-full tracking-wider uppercase hover:scale-105 active:scale-95 transition-transform duration-200"
              onClick={(() => {
                const temp = typeOut
                setTypeOut(typeIn)
                setTypeIn(temp)
              })}
              style={{
                background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                fontFamily: "'DM Mono', monospace",
                letterSpacing: "0.1em",
                boxShadow: "0 4px 20px rgba(59,130,246,0.5), 0 0 0 3px rgba(255,255,255,0.9)",
              }}
            >
              ⇅ swap
            </button>
          </div>

          {/* TO PANEL */}
          <div className="px-6 pt-5 pb-6" style={{ background: "rgba(255,255,255,0.9)" }}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#94a3b8", fontFamily: "'DM Mono', monospace" }}>
                To
              </span>
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#94a3b8", fontFamily: "'DM Mono', monospace" }}>
                Currency Type
              </span>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="number"
                
                value={dataOut}
                className="flex-1 text-3xl font-light outline-none bg-transparent text-slate-800 w-0"
                style={{ fontFamily: "'DM Mono', monospace" }}
                placeholder="0"
                readOnly
              />
              <div className="relative">
                <select
                  value={typeOut}
                  onChange={((e) => { setTypeOut((e.target.value).toUpperCase())})}
                  className="appearance-none pl-4 pr-9 py-2.5 rounded-xl text-sm font-semibold uppercase outline-none cursor-pointer"
                  style={{
                    background: "#f1f5f9",
                    color: "#334155",
                    border: "1.5px solid #e2e8f0",
                    fontFamily: "'DM Mono', monospace",
                    letterSpacing: "0.05em",
                  }}
                >
                  {currencies.map((c) => (
                    <option key={c.toUpperCase()} value={c.toUpperCase()}>{c.toUpperCase()}</option>
                  ))}
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 4l4 4 4-4" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* CONVERT BUTTON */}
          <div className="p-4 pt-0" style={{ background: "rgba(255,255,255,0.9)" }}>
            <button
              className="w-full py-4 text-white font-bold text-base tracking-widest uppercase rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #1e40af 100%)",
                fontFamily: "'DM Mono', monospace",
                letterSpacing: "0.15em",
                boxShadow: "0 8px 24px rgba(59,130,246,0.4)",
              }}
            >
              Convert {typeIn.toUpperCase()} to {typeOut.toUpperCase()} 
            </button>
          </div>

        </div>
      </div>

      {/* Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500;600&display=swap');
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
