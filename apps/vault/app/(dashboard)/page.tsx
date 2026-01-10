import GraphView from '@/components/graph/GraphView'

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4 rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Knowledge Graph</h3>
          </div>
          <div className="p-6 pt-0 pl-2">
            <GraphView />
          </div>
        </div>
        <div className="col-span-3 rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6">
            <h3 className="tracking-tight text-sm font-medium">Stats</h3>
            <p className="text-muted-foreground">Coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  )
}
