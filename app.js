import "regenerator-runtime/runtime";
import axios from "axios";

const BASE = "https://api.github.com/orgs/stackbuilders/repos";

const getAllItems = async () => {
  try {
    const response = await axios.get(BASE);

    //const allItems = response.data;
    return response.data;
    //console.log(response.data);
    //return allItems; //stargazers_count
  } catch (errors) {
    console.error(errors);
  }
};
//getAllItems();
// const Repos = getAllItems()
//   .then((result) => console.log(result))
//   .catch((err) => {
//     console.error(err);
//   });

// const moreThanFive = async () => {
//   const Repos = await getAllItems();
//   console.log(Repos.filter((Repo) => Repo.stargazers_count > 5));
// };
// moreThanFive();

const sumStars = async () => {
  const Repos = await getAllItems();
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  console.log(Repos.map((Repo) => Repo.stargazers_count).reduce(reducer));
};
sumStars();
