import { useState } from 'react';
import { Search, Globe, MapPin, Server, Activity, Shield } from 'lucide-react';
import { IPLookup } from './components/IPLookup';
import { ResultsDisplay } from './components/ResultsDisplay';
import { IPInfo } from './types';

function App() {
  const [ipInfo, setIpInfo] = useState<IPInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLookup = async (ipAddress: string) => {
    setLoading(true);
    setError(null);
    setIpInfo(null);

    try {
      const response = await fetch(`http://ip-api.com/json/${ipAddress}?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query`);
      const data = await response.json();

      if (data.status === 'fail') {
        setError(data.message || 'Invalid IP address');
        return;
      }

      setIpInfo(data);
    } catch (err) {
      setError('Failed to fetch IP information. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-12 h-12 text-cyan-400 mr-3" />
            <h1 className="text-5xl font-bold text-white">OSINT IP Lookup</h1>
          </div>
          <p className="text-slate-400 text-lg">Open Source Intelligence Tool for IP Address Investigation</p>
        </header>

        <div className="max-w-4xl mx-auto">
          <IPLookup onLookup={handleLookup} loading={loading} />

          {error && (
            <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-center">
              {error}
            </div>
          )}

          {ipInfo && <ResultsDisplay ipInfo={ipInfo} />}
        </div>

        <footer className="mt-16 text-center text-slate-500 text-sm">
          <p>Using ip-api.com public API • For educational and legitimate OSINT purposes only</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
