import articles from "./article-content";

import ArticlesList from "../components/ArticleList";

const ArticleListPage = () => {
    return (
        <>
        <h1>Articles</h1>
        <ArticlesList articles={articles} />
        </>
    ); 
}

export default ArticleListPage;
