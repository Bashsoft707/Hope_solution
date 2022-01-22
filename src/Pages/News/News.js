import React, { useEffect, useState } from "react";
import { getArticles } from "../../api";
import ArticleList from "../../Components/ArticleList";
import { Container, Header } from "semantic-ui-react";
import SearchBar from "../../Components/SearchBar";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [apiError, setApiError] = useState("");
  const [searchTopic, setSearchTopic] = useState("");
  const [totalResults, setTotalResults] = useState("");
  const [loading, setLoading] = useState(false);

  let searchForTopic = function () {
    return undefined;
  };

  useEffect(() => {
    async function searchForTopic(topic) {
      try {
        setLoading(true);
        const response = await getArticles(topic);
        console.log(response.articles);
        setArticles(response.articles);
        setSearchTopic(topic);
        setTotalResults(response.totalResults);
      } catch (error) {
        setApiError("Could not find any articles");
      }
      setLoading(false);
    }
    searchForTopic();
  }, []);

  return (
    <Container>
      <Header as="h2" style={{ textAlign: "center", margin: 20 }}>
        Search for a topic
      </Header>
      <SearchBar searchTopic={searchTopic} setSearchTopic={setSearchTopic} searchForTopic={searchForTopic} />
      <p style={{ textAlign: "center" }}>
        Powered by <a href="https://newsapi.org/">NewsAPI.org</a>
      </p>
      {loading && (
        <p style={{ textAlign: "center" }}>Searching for articles...</p>
      )}
      {articles.length > 0 && (
        <Header as="h4" style={{ textAlign: "center", margin: 20 }}>
          Found {totalResults} articles on "{searchTopic}"
        </Header>
      )}
      {articles.length > 0 && <ArticleList articles={articles} />}
      {apiError && <p>Could not fetch any articles. Please try again.</p>}
    </Container>
  );
};

export default News;
