export const fetchUserRepos = async (username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
    if (!res.ok) throw new Error("Failed to fetch repositories");
    return res.json();
  };
  
// src/lib/github.ts
export const fetchRepoCommits = async (
    username: string,
    repo: string,
    pages = 2
  ) => {
    const allCommits = [];
  
    for (let i = 1; i <= pages; i++) {
      const res = await fetch(
        `https://api.github.com/repos/${username}/${repo}/commits?per_page=100&page=${i}`
      );
      if (!res.ok) break;
      const commits = await res.json();
      if (commits.length === 0) break;
      allCommits.push(...commits);
    }
  
    return allCommits;
  };
  