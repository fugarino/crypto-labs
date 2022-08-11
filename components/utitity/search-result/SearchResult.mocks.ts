import { ISearchResult } from "./SearchResult";

const base: ISearchResult = {
  url: "https://www.google.com",
  title: "This is a link to a search result about product or service",
  text: "The topic of this link is product or service. Desription of the search result.",
};

export const mockSearchResultProps = {
  base,
};
