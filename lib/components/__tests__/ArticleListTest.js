import React from "react";
import ArticleItem from "../Article";
import renderer from "react-test-renderer";
import ArticleList from "../ArticleList";
import { expectedError } from "@babel/core/lib/errors/rewrite-stack-trace";

describe("ArticleList", () => {
  const testProps = {
    articles: {
      a: { id: "a" },
      b: { id: "b" },
    },
    articleActions: {
      getAuthor: jest.fn().mockImplementation(() => ({
        id: "d85577ea34ae50f2dac5347b5219aa23",
        firstName: "Andrew",
        lastName: "Clark",
        website: "https://twitter.com/acdlite",
      })),
    },
  };

  it("renders correctly", () => {
    const tree = renderer.create(<ArticleList {...testProps} />).toJSON();
    expect(tree.children.length).toBe(2);
    expect(tree).toMatchSnapshot();
  });
});
