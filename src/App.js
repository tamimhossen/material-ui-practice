import Button from "@mui/material/Button";
import News from "./components/News/News";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [articles, setArtcles] = useState([]);
  useEffect(() => {
    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-08-29&sortBy=publishedAt&apiKey=287d6a5b4c3b48a49ed26154ff6c9b67';
    fetch(url)
    .then(res => res.json())
    .then(data => setArtcles(data.articles))
  }, [])
  return (
    <div>
      <h2>Headlines: {articles.length}</h2>
      {
        articles.map(article => <News article={article}></News>)
      }
    </div>
  );
}

export default App;
