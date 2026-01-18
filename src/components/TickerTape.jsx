import React, { useEffect, useRef } from 'react';

const TickerTape = () => {
    const container = useRef();

    useEffect(() => {
        // Check if script already exists to prevent duplicates
        if (container.current.querySelector('script')) return;

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = JSON.stringify({
            "symbols": [
                { "proName": "FOREXCOM:SPXUSD", "title": "S&P 500" },
                { "proName": "FOREXCOM:NSXUSD", "title": "US 100" },
                { "proName": "FX_IDC:EURUSD", "title": "EUR/USD" },
                { "proName": "BITSTAMP:BTCUSD", "title": "Bitcoin" },
                { "proName": "BITSTAMP:ETHUSD", "title": "Ethereum" },
                { "proName": "OANDA:XAUUSD", "title": "Gold" }
            ],
            "showSymbolLogo": true,
            "colorTheme": "dark",
            "isTransparent": false,
            "displayMode": "adaptive",
            "locale": "en"
        });
        container.current.appendChild(script);
    }, []);

    return (
        <div className="tradingview-widget-container" ref={container}>
            <div className="tradingview-widget-container__widget"></div>
        </div>
    );
};

export default TickerTape;