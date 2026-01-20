import { useState } from 'react';
import { Code, ChevronDown, ChevronUp } from 'lucide-react';
import { IPInfo } from '../types';

interface JSONViewerProps {
  data: IPInfo;
}

export function JSONViewer({ data }: JSONViewerProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden shadow-2xl">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/30 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Code className="w-5 h-5 text-green-400" />
          <h3 className="text-lg font-semibold text-white">Raw JSON Response</h3>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-slate-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400" />
        )}
      </button>

      {isExpanded && (
        <div className="px-6 py-4 border-t border-slate-700">
          <pre className="bg-slate-950 p-4 rounded-lg overflow-x-auto text-sm">
            <code className="text-green-400 font-mono">
              {JSON.stringify(data, null, 2)}
            </code>
          </pre>
        </div>
      )}
    </div>
  );
}
