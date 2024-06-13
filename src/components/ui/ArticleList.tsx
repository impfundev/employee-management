export const ArticleList = () => {
  return (
    <section className="uk-section">
      <h2>Articles</h2>
      <div className="uk-child-width-1-3@m" uk-grid="">
        {articles.map((article, i) => (
          <Article key={i} article={article} />
        ))}
      </div>
    </section>
  );
};

type Article = {
  title: string;
  content: string;
  photo: string;
};

const Article = ({ article }: { article: Article }) => {
  return (
    <div>
      <div className="uk-card uk-card-default">
        <div className="uk-card-media-top">
          <img
            className="uk-width-1-1 uk-hight-small"
            src={article.photo}
            width="400"
            height="300"
            alt={article.title}
          />
        </div>
        <div className="uk-card-body">
          <h3 className="uk-card-title">{article.title}</h3>
          <p>{article.content}</p>
        </div>
      </div>
    </div>
  );
};

const articles = [
  {
    title: "Lorem ipsum 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    photo: "https://dummyjson.com/image/400x300?text=Lorem+Ipsum+1",
  },
  {
    title: "Lorem ipsum 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    photo: "https://dummyjson.com/image/400x300?text=Lorem+Ipsum+2",
  },
  {
    title: "Lorem ipsum 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    photo: "https://dummyjson.com/image/400x300?text=Lorem+Ipsum+3",
  },
];
