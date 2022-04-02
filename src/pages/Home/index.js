import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

import CardBook from "../../components/CardBook";
import LogoBox from "../../components/LogoBox";
import Pagination from "../../components/Pagination";
import DetailCardBook from "../../components/DetailCardBook";

import BlackLogo from "../../assets/blackLogo.svg";
import { useBook } from "../../providers/Book";
import { useUser } from "../../providers/User";

import * as H from "./styles";
import { useEffect } from "react";

const Home = () => {
  const {
    books,
    book,
    showBookDetail,
    setShowBookDetail,
    handleRetrieveBook,
    setPerPage,
  } = useBook();

  const { user } = useUser();

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleChangeBooksPerPage = () => {
    if (window.screen.width === 1024) {
      setPerPage(12);
    }
  };

  useEffect(() => {
    handleChangeBooksPerPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.screen.width]);

  return (
    <H.Container>
      <LogoBox logo={BlackLogo} />
      <H.Greeting>
        Bem vindo, <strong>{user.name}!</strong>{" "}
      </H.Greeting>
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
