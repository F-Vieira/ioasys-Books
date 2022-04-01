import * as CB from "./styles";

const CardBook = ({ cover, title, authors, pages, publisher, published }) => {
  return (
    <CB.Container>
      <CB.Cover
        // src={
        //   cover === null
        //     ? "https://d2drtqy2ezsot0.cloudfront.net/Book-1.jpg"
        //     : cover
        // }
        src={cover}
        alt={`Capa do livro ${title}`}
      />
      <CB.Info>
        <CB.TitleAuthors>
          <h1>{title}</h1>
          {authors.map((author) => (
            <p key={authors.indexOf(author)}>{author}</p>
          ))}
        </CB.TitleAuthors>

        <CB.MoreInfo>
          <p>{pages} páginas</p>
          <p>Editora {publisher.split(",")[0].split("-")[0]}</p>
          <p>Publicado em {published}</p>
        </CB.MoreInfo>
      </CB.Info>
    </CB.Container>
  );
};

export default CardBook;
