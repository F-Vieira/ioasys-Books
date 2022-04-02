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
  const { books, book, showBookDetail, setShowBookDetail, handleRetrieveBook } =
    useBook();

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

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
      {showBookDetail && (
        <DetailCardBook
          key={book.id}
          cover={book.imageUrl}
          title={book.title}
          authors={book.authors}
          pages={book.pageCount}
          publisher={book.publisher}
          published={book.published}
          language={book.language}
          isbn10={book.isbn10}
          isbn13={book.isbn13}
          description={book.description}
          closeDetail={() => setShowBookDetail(false)}
        />
      )}
    </H.Container>
  );
};

export default Home;
