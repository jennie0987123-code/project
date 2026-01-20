import { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';

interface IPLookupProps {
  onLookup: (ip: string) => void;
  loading: boolean;
}

export function IPLookup({ onLookup, loading }: IPLookupProps) {
  const [ipAddress, setIpAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ipAddress.trim()) {
      onLookup(ipAddress.trim());
    }
  };

  const loadExample = (ip: string) => {
    setIpAddress(ip);
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 shadow-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="ip-input" className="block text-sm font-medium text-slate-300 mb-2">
            Enter IP Address
          </label>
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <input
                id="ip-input"
                type="text"
                value={ipAddress}
                onChange={(e) => setIpAddress(e.target.value)}
                placeholder="e.g., 8.8.8.8"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                disabled={loading}
              />
            </div>
            <button
              type="submit"
              disabled={loading || !ipAddress.trim()}
              className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-all flex items-center gap-2 shadow-lg hover:shadow-cyan-500/20"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Searching...
                </>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  Lookup
                </>
              )}
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-slate-400">Examples:</span>
          {['8.8.8.8', '1.1.1.1', '208.67.222.222'].map((ip) => (
            <button
              key={ip}
              type="button"
              onClick={() => loadExample(ip)}
              className="text-sm px-3 py-1 bg-slate-700/50 hover:bg-slate-700 text-cyan-400 rounded-md transition-colors"
              disabled={loading}
            >
              {ip}
            </button>
          ))}
        </div>
      </form>
    </div>
  );
}
