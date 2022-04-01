import { useEffect } from "react";
import CardBook from "../../components/CardBook";
import { useBook } from "../../providers/Book";
import * as H from "./styles";

const Home = () => {
  const { books } = useBook();

  return (
    <H.Container>
      {books.map((book) => (
        <CardBook
          key={book.id}
          cover={book.imageUrl}
          title={book.title}
          authors={book.authors}
          pages={book.pageCount}
          publisher={book.publisher}
          published={book.published}
        />
      ))}
    </H.Container>
  );
};

export default Home;
