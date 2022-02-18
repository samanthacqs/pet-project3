import "regenerator-runtime/runtime";
import axios from "axios";

const BASE = "https://api.github.com/orgs/stackbuilders/repos";

const mkRepo = (item) => {
  return {
    name: item.name,
    stars: item.stargazers_count,
    date: item.updated_at,
  };
};

const getAllItems = async (repoManager) => {
  try {
    const response = await repoManager.get(BASE);

    const items = response.data.map(mkRepo);
    console.log(items);
    console.log(moreThanFive(items));
    console.log(lastFiveUp(items));
    console.log(sumStars(items));
  } catch (errors) {
    console.error(errors);
  }
};
getAllItems(axios);

const moreThanFive = (repos) => {
  return repos.filter((repo) => repo.stars > 5);
};

const lastFiveUp = (repos) => {
  return repos
    .sort(function (a, b) {
      var keyA = new Date(a.date),
        keyB = new Date(b.date);

      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    })
    .slice(-5);
};

const sumStars = (repos) => {
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  return repos.map((repo) => repo.stars).reduce(reducer);
};
