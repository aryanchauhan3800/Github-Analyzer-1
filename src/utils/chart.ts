export function groupCommitsByDate(commits: any[]): Record<string, number> {
    const grouped: Record<string, number> = {};
  
    commits.forEach((commit) => {
      const date = new Date(commit.commit.author.date)
        .toISOString()
        .split("T")[0];
      grouped[date] = (grouped[date] || 0) + 1;
    });
  
    return grouped;
  }
  