interface InfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
}

export function InfoCard({ icon, label, value, highlight }: InfoCardProps) {
  return (
    <div className={`p-4 rounded-lg border transition-all ${
      highlight
        ? 'bg-cyan-500/10 border-cyan-500/30'
        : 'bg-slate-900/30 border-slate-600/30'
    }`}>
      <div className="flex items-start gap-3">
        <div className="mt-1">{icon}</div>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-slate-400 mb-1">{label}</p>
          <p className={`font-mono text-sm break-all ${
            highlight ? 'text-cyan-300 font-bold' : 'text-white'
          }`}>
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}
