export interface GithubServiceProvider {
  getUser: () => Promise<any>;
}

export function githubServiceProvider(): GithubServiceProvider {
  return {
    getUser: async (): Promise<any> => {
      try {
        const userData = await fetch("https://api.github.com/users/lewyuburi");
        return userData.json();
      } catch (e) {
        throw e;
      }
    },
  };
}
