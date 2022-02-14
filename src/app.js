import "regenerator-runtime/runtime";
import axios from "axios";

const BASE = "https://api.github.com/orgs/stackbuilders/repos";

const getAllItems = async () => {
  try {
    const response = await axios.get(BASE);

    const items = someItems(response.data);

    console.log(moreThanFive(items));
    console.log(lastFiveUp(items));
    console.log(sumStars(items));
  } catch (errors) {
    console.error(errors);
  }
};
getAllItems();
// const repos = getAllItems()
//   .then((result) => console.log(result))
//   .catch((err) => {
//     console.error(err);
//   });
const someItems = (items) => {
  const container = [];

  items.map((item) =>
    container.push({
      name: item.name,
      stars: item.stargazers_count,
      date: item.updated_at,
    })
  );
  return container;
};

const moreThanFive = (repos) => {
  const fiveStars = repos.filter((repo) => repo.stars > 5);

  return fiveStars;
};

const sorted = (repos) => {
  const dates_sorted = repos.map((repo) => repo.date).sort();

  return dates_sorted;
};

const lastFiveUp = (repos) => {
  const dates = repos
    .map((repo) => repo.date)
    .sort()
    .slice(-5);

  return dates;
};

const sumStars = (repos) => {
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  const allStars = repos.map((repo) => repo.stars).reduce(reducer);

  return allStars;
};
