import { useState } from "react";
import { UserSearch } from "./components/UserSearch";
import { RepoList } from "./components/RepoList";
import { CommitChart } from "./components/CommitChart";
import { fetchUserRepos, fetchRepoCommits } from "./lib/github";
import { groupCommitsByDate } from "./utils/chart";
import { Skeleton } from "@/components/ui/skeleton";
import { Footer } from "./components/Footer";
function App() {
  const [repos, setRepos] = useState<any[]>([]);
  const [chartData, setChartData] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(false);

  const handleSearch = async (username: string) => {
    setLoading(true);
    try {
      const repos = await fetchUserRepos(username);
      setRepos(repos);

      if (repos.length > 0) {
        const commits = await fetchRepoCommits(username, repos[0].name);
        const grouped = groupCommitsByDate(commits);
        setChartData(grouped);
      }
    } catch (error) {
      setRepos([]);
      setChartData({});
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-6 max- mx-auto bg-black min-h-screen text-zinc-100">
      <h1 className="text-2xl font-bold mb-4">GitHub Activity Metrics</h1>
      <UserSearch onSearch={handleSearch} />
      <CommitChart data={chartData} />
      {loading ? (
        <div className="space-y-4 mt-6">
          <Skeleton className="h-6 w-1/3 bg-zinc-800" />
          <Skeleton className="h-24 w-full bg-zinc-800" />
        </div>
      ) : (
        <>
          <RepoList repos={repos} />
          {Object.keys(chartData).length > 0 }
        </>

      )}
      <Footer/>
    </main>
  );
}

export default App;
