import { AiOutlineClose } from "react-icons/ai";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

import * as DCB from "./styles";

const DetailCardBook = ({
  cover,
  title,
  authors,
  pages,
  publisher,
  published,
  language,
  isbn10,
  isbn13,
  description,
  closeDetail,
}) => {
  return (
    <DCB.Container>
      <DCB.Close onClick={closeDetail}>
        <AiOutlineClose />
      </DCB.Close>
      <DCB.Card>
        <img
          className="book_cover"
          src={cover}
          alt={`Capa do livro ${title}`}
        />
        <DCB.Info>
          <h1 className="book_title">{title}</h1>

          <p className="book_authors">{authors.join(", ")}</p>

          <DCB.InfoDetail>
            <h2>INFORMAÇÕES</h2>
            <p>
              <span>Páginas</span>
              <span>{pages} páginas</span>
            </p>
            <p>
              <span>Editora</span>
              <span>{publisher}</span>
            </p>
            <p>
              <span>Publicação</span>
              <span>{published}</span>
            </p>
            <p>
              <span>Idioma</span>
              <span>{language}</span>
            </p>
            <p>
              <span>Título Original</span>
              <span>{title}</span>
            </p>
            <p>
              <span>ISBN-10</span>
              <span>{isbn10}</span>
            </p>
            <p>
              <span>ISBN-13</span>
              <span>{isbn13}</span>
            </p>
          </DCB.InfoDetail>
          <DCB.Review>
            <h2>RESENHA DA EDITORA</h2>
            <blockquote>
              <ImQuotesLeft />
              {description}
              <ImQuotesRight />
            </blockquote>
          </DCB.Review>
        </DCB.Info>
      </DCB.Card>
    </DCB.Container>
  );
};

export default DetailCardBook;
