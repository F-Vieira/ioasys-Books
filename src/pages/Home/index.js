import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

import CardBook from "../../components/CardBook";
import LogoBox from "../../components/LogoBox";
import Pagination from "../../components/Pagination";

import BlackLogo from "../../assets/blackLogo.svg";
import { useBook } from "../../providers/Book";
import * as H from "./styles";
import DetailCardBook from "../../components/DetailCardBook";

const Home = () => {
  const { books, handleRetrieveBook } = useBook();

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  console.log(books[0]);

  return (
    <H.Container>
      <LogoBox logo={BlackLogo} />
      <H.Logout onClick={handleLogout}>
        <FiLogOut />
      </H.Logout>
      <H.Content>
        {books.map((book) => (
          <CardBook
            key={book.id}
            cover={book.imageUrl}
            title={book.title}
            authors={book.authors}
            pages={book.pageCount}
            publisher={book.publisher}
            published={book.published}
            onClick={() => handleRetrieveBook(book.id)}
          />
        ))}
      </H.Content>
      <Pagination />
      <DetailCardBook
        key="1"
        cover={books[0].imageUrl}
        title={books[0].title}
        authors={books[0].authors}
        pages={books[0].pageCount}
        publisher={books[0].publisher}
        published={books[0].published}
        language={books[0].language}
        isbn10={books[0].isbn10}
        isbn13={books[0].isbn13}
        description={books[0].description}
      />
    </H.Container>
  );
};

export default Home;
