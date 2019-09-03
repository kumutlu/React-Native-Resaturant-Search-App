import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/* <Text style={{ marginLeft: 15, fontSize: 18 }}>
        We have found {results.length} results
      </Text> */}
      <ScrollView>
        <ResultList
          results={filterResultsByPrice("₺")}
          title="Cost Effective"
        />
        <ResultList results={filterResultsByPrice("₺₺")} title="Bit Pricier" />
        <ResultList results={filterResultsByPrice("₺₺₺")} title="Big Spender" />
        <ResultList results={filterResultsByPrice("₺₺₺₺")} title="Riche Rich" />
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({});

export default SearchScreen;
