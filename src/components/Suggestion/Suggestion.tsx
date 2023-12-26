import React from "react";
import "./Suggestion.scss";
import Trends from "./Trends/Trends";
import Popular from "./Popular/Popular";

interface SuggestionProps {
  searchItem: string;
}
export default function Suggestion({ searchItem }: SuggestionProps) {
  return (
    <>
      {searchItem && (
        <div className="suggestionBox">
          <Trends />
          <Popular />
        </div>
      )}
    </>
  );
}
