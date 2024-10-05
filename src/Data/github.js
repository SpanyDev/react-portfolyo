import useSWR from "swr";
import { Link } from "react-router-dom";
import { IconJewishStarFilled } from "@tabler/icons-react";
const useFetchGithubRepos = () => {
  const { data, error } = useSWR(
    `https://api.github.com/users/spanydev/repos`,
    async (url) => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch GitHub repos");
      }
      return response.json();
    },
    { revalidateOnFocus: false, revalidateOnReconnect: false }
  );

  return {
    repos: data,
    isLoading: !error && !data,
    isError: error,
  };
};

const truncateText = (text, maxLength) => {
  if (!text) return "No description";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

const GithubRepos = () => {
  const { repos, isLoading, isError } = useFetchGithubRepos();

  if (isLoading)
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>Yükleniyor...</div>
    );
  if (isError)
    return (
      <div style={{ textAlign: "center", padding: "20px", color: "red" }}>
        Repolar yüklenirken bir hata oluştu: Failed to fetch GitHub repos
      </div>
    );

  return (
    <div className="container m-12 mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.slice(0, 9).map((repo, index) => (
            <Link
              to={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl relative h-full"
            >
              {repo.private === false && (
                <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  Public
                </span>
              )}
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 break-words">
                  {repo.name.length > 18 ? (
                    <>
                      {repo.name.slice(0, 18)}
                      <br />
                      {repo.name.slice(18)}
                    </>
                  ) : (
                    repo.name
                  )}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 line-clamp-3">
                  {truncateText(repo.description, 80)}
                </p>
              </div>
              <div className="flex justify-between mt-4 text-xs sm:text-sm text-gray-500">
                <span>{repo.language}</span>
                <div className="flex items-center">
                  <IconJewishStarFilled size={16} color="yellow" />
                  <span className="mx-2"> {repo.stargazers_count}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GithubRepos;
