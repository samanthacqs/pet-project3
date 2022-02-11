import "regenerator-runtime/runtime";
import axios from "axios";

const BASE = "https://api.github.com/orgs/stackbuilders/repos";

const getAllItems = async () => {
  try {
    const response = await axios.get(BASE);

    const items = someItems(response.data);

    console.log(response.data);

    // console.log(moreThanFive(items));
    // console.log(lastFiveUp(items));
    // console.log(sumStars(items));
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
    container.push(item.name, item.stargazers_count, item.updated_at)
  );
  return container;
};

const moreThanFive = (repos) => {
  const fiveStars = repos.filter((repo) => repo.stargazers_count > 5);

  return fiveStars;
};

const lastFiveUp = (repos) => {
  const dates = repos
    .map((repo) => repo.updated_at)
    .sort()
    .slice(-5);

  return dates;
};

const sumStars = (repos) => {
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  const allStars = repos.map((repo) => repo.stargazers_count).reduce(reducer);

  return allStars;
};
