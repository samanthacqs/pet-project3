import "regenerator-runtime/runtime";
import axios from "axios";

const BASE = "https://api.github.com/orgs/stackbuilders/repos";

const getAllItems = async () => {
  try {
    const response = await axios.get(BASE);

    const allItems = response.data;

    moreThanFive(allItems);
    lastFiveUp(allItems);
    sumStars(allItems);
  } catch (errors) {
    console.error(errors);
  }
};
getAllItems();
// const Repos = getAllItems()
// .then((result) => console.log(result))
// .catch((err) => {
// console.error(err);
// });

const moreThanFive = (Repos) => {
  console.log(Repos.filter((Repo) => Repo.stargazers_count > 5));
};

const lastFiveUp = (Repos) => {
  const dates = Repos.map((Repo) => Repo.updated_at)
    .sort()
    .slice(-5);

  console.log(dates);
};

const sumStars = (Repos) => {
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  console.log(Repos.map((Repo) => Repo.stargazers_count).reduce(reducer));
};
