import GraphView from '@/components/graph/GraphView'
import { PersonalTracker } from '@/components/dashboard/PersonalTracker'
import { SprintProgress } from '@/components/dashboard/SprintProgress'

export default function DashboardPage() {
  return (
    <div className="p-8 space-y-8 h-full bg-zinc-950">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white">Mission Control</h2>
          <p className="text-zinc-500 text-sm">Welcome back, Partner. Here is your current standing.</p>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-7 h-[calc(100vh-250px)]">

        {/* Left: Player Stats */}
        <div className="lg:col-span-2 space-y-6">
          <PersonalTracker />
          {/* Quick Actions (Future) */}
          <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/30">
            <h4 className="text-xs font-semibold text-zinc-500 uppercase mb-3">Daily Mission</h4>
            <p className="text-sm text-zinc-300 italic">"Read the Sprint 1 Master Plan to align on this week's technical goals."</p>
          </div>
        </div>

        {/* Center: The Graph */}
        <div className="lg:col-span-3 rounded-xl border border-zinc-800 bg-zinc-900/50 shadow-2xl relative overflow-hidden">
          <div className="absolute top-4 left-4 z-10">
            <h3 className="tracking-tight text-xs font-medium text-zinc-400 uppercase">Knowledge Graph</h3>
          </div>
          <div className="h-full">
            <GraphView />
          </div>
        </div>

        {/* Right: Company Progress */}
        <div className="lg:col-span-2 space-y-6">
          <SprintProgress />
          {/* Active Targets */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Active Targets</h4>
            <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-zinc-300">Power BI Template (A1) - Final Polish</span>
            </div>
            <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <span className="text-xs text-zinc-300">Web Dashboard Lite (E1) - Specs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
