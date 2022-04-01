import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

import CardBook from "../../components/CardBook";
import LogoBox from "../../components/LogoBox";
import Pagination from "../../components/Pagination";

import BlackLogo from "../../assets/blackLogo.svg";
import { useBook } from "../../providers/Book";
import * as H from "./styles";

const Home = () => {
  const { books } = useBook();

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
          />
        ))}
      </H.Content>
      <Pagination />
    </H.Container>
  );
};

export default Home;
