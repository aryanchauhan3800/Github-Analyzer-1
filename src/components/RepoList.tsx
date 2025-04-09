interface Repo {
    id: number;
    name: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
  }
  
  export function RepoList({ repos }: { repos: Repo[] }) {
    if (repos.length === 0) return null;
  
    return (
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-white mb-3">Repositories</h2>
        <ul className="space-y-2">
          {repos.map((repo) => (
            <li
              key={repo.id}
              className="p-4 border border-gray-700 rounded-lg bg-black text-white"
            >
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-white underline hover:text-gray-300"
              >
                {repo.name}
              </a>
              <p className="text-sm text-gray-400 mt-1">
                ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  