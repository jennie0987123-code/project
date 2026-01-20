import { Globe, MapPin, Server, Activity, Code } from 'lucide-react';
import { IPInfo } from '../types';
import { InfoCard } from './InfoCard';
import { JSONViewer } from './JSONViewer';

interface ResultsDisplayProps {
  ipInfo: IPInfo;
}

export function ResultsDisplay({ ipInfo }: ResultsDisplayProps) {
  return (
    <div className="mt-8 space-y-6 animate-fade-in">
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 shadow-2xl">
        <div className="flex items-center gap-3 mb-6">
          <Activity className="w-6 h-6 text-cyan-400" />
          <h2 className="text-2xl font-bold text-white">IP Information</h2>
          <span className="ml-auto px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
            Active
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard
            icon={<Globe className="w-5 h-5 text-blue-400" />}
            label="IP Address"
            value={ipInfo.query}
            highlight
          />
          <InfoCard
            icon={<MapPin className="w-5 h-5 text-red-400" />}
            label="Country"
            value={`${ipInfo.country} (${ipInfo.countryCode})`}
          />
          <InfoCard
            icon={<MapPin className="w-5 h-5 text-orange-400" />}
            label="City / Region"
            value={`${ipInfo.city}, ${ipInfo.regionName}`}
          />
          <InfoCard
            icon={<Server className="w-5 h-5 text-purple-400" />}
            label="ISP"
            value={ipInfo.isp}
          />
          <InfoCard
            icon={<Server className="w-5 h-5 text-green-400" />}
            label="Organization"
            value={ipInfo.org}
          />
          <InfoCard
            icon={<Activity className="w-5 h-5 text-cyan-400" />}
            label="AS Number"
            value={ipInfo.as}
          />
          <InfoCard
            icon={<Globe className="w-5 h-5 text-yellow-400" />}
            label="Timezone"
            value={ipInfo.timezone}
          />
          <InfoCard
            icon={<MapPin className="w-5 h-5 text-pink-400" />}
            label="Coordinates"
            value={`${ipInfo.lat}, ${ipInfo.lon}`}
          />
        </div>
      </div>

      <JSONViewer data={ipInfo} />
    </div>
  );
}
