import { FiLogOut } from "react-icons/fi";

import CardBook from "../../components/CardBook";
import LogoBox from "../../components/LogoBox";
import BlackLogo from "../../assets/blackLogo.svg";

import { useBook } from "../../providers/Book";
import * as H from "./styles";

const Home = () => {
  const { books } = useBook();

  return (
    <H.Container>
      <LogoBox logo={BlackLogo} />
      <H.Logout>
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
    </H.Container>
  );
};

export default Home;
