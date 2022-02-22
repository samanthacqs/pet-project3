import * as functions from "../src/app";
import { mockRepos } from "./reposData";
import { makedData } from "./makedData";

//const functions = require("../src/app");
describe("mkRepo function is working", () => {
  describe("when mkRepo is called with a list of valid objects", () => {
    it("returns all the objects with only certain keys", () => {
      const repos = {
        name: "pivotal_planning_poker",
        stars: 6,
        date: "2017-05-21T04:36:44Z",
      };
      const mappedRepo = functions.mkRepo(mockRepos[0]);
      expect(mappedRepo).toStrictEqual(repos);
    });
  });
  // describe("when mkRepo is called with a list of invalid objects", () => {
  //   it("fails and throws an error", () => {});
  // });
});

describe("moreThanFive function is working", () => {
  describe("when moreThanFive is called with a list of valid objects", () => {
    it("return all the objects that in the key stars have a value greater than 5", () => {
      const fiveStars = [
        {
          name: "pivotal_planning_poker",
          stars: 6,
          date: "2017-05-21T04:36:44Z",
        },
        {
          name: "propel",
          stars: 9,
          date: "2019-08-13T14:44:41Z",
        },
        {
          name: "stub_shell",
          stars: 7,
          date: "2017-06-05T19:58:59Z",
        },
      ];
      const fiveRepos = functions.moreThanFive(makedData);
      expect(fiveRepos).toStrictEqual(fiveStars);
    });
  });
});

describe("lastFiveUp function is working", () => {
  describe("whenlastFiveUp is called with a list of valid objects", () => {
    it("return the objects ordered by the date key", () => {
      const orderedData = [
        {
          name: "hackchange_demo",
          stars: 0,
          date: "2014-12-15T12:18:33Z",
        },
        {
          name: "pivotal_planning_poker",
          stars: 6,
          date: "2017-05-21T04:36:44Z",
        },
        {
          name: "stub_shell",
          stars: 7,
          date: "2017-06-05T19:58:59Z",
        },
        {
          name: "propel",
          stars: 9,
          date: "2019-08-13T14:44:41Z",
        },
        {
          name: "hubot",
          stars: 2,
          date: "2022-02-06T02:13:28Z",
        },
      ];
      const sortedRepos = functions.lastFiveUp(makedData);
      expect(sortedRepos).toStrictEqual(orderedData);
    });
  });
});

describe("sumStars function is working", () => {
  describe("when sumStars is called with a list of valid objects", () => {
    it("returns the sum of all the respositories stars keys", () => {
      const sumExpected = 26;
      const sumedStars = functions.sumStars(makedData);
      expect(sumedStars).toStrictEqual(sumExpected);
    });
  });
});
