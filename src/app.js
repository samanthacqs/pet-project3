import "regenerator-runtime/runtime";
import axios from "axios";

const BASE = "https://api.github.com/orgs/stackbuilders/repos";

export const mkRepo = (item) => {
  return {
    name: item.name,
    stars: item.stargazers_count,
    date: item.updated_at,
  };
};

export const getAllItems = async (repoManager) => {
  try {
    const response = await repoManager.get(BASE);

    const items = response.data.map(mkRepo);
    // console.log(items);
    // console.log(moreThanFive(items));
    // console.log(lastFiveUp(items));
    // console.log(sumStars(items));
  } catch (errors) {
    console.error(errors);
  }
};
getAllItems(axios);

export const moreThanFive = (repos) => {
  return repos.filter((repo) => repo.stars > 5);
};

export const lastFiveUp = (repos) => {
  return repos
    .sort((a, b) => (new Date(a.date) >= new Date(b.date) ? 1 : -1))
    .slice(-5);
};

export const sumStars = (repos) => {
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  return repos.map((repo) => repo.stars).reduce(reducer);
};
