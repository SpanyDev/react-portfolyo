import GithubRepos from '../Data/github.js';

const Github = () => {
  return (
    <div>
      <h2 style={{ fontFamily: "Heebo, sans-serif", fontWeight: 700 }} className='flex justify-center items-center text-4xl m-5'>GitHub Projelerim</h2>
      <GithubRepos />
    </div>
  )
};

export default Github;
