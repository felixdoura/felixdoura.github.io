import { useState, useEffect } from "react";

export function useGithubRepos(username) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
        );
        if (!res.ok) throw new Error("GitHub API error");
        const data = await res.json();
        const filtered = data
          .filter((r) => !r.fork && r.name !== username && r.name !== `${username}.github.io`)
          .sort((a, b) => (b.stargazers_count - a.stargazers_count) || new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(filtered);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, [username]);

  return { repos, loading, error };
}
