import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import { useBook } from "../../providers/Book";

import * as Page from "./styles";

const Pagination = () => {
  const { allPages, page, setPage } = useBook();

  const nextPage = () => {
    if (page < Math.round(allPages)) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <Page.Container
      disablePrev={page === 1}
      disableNext={page === Math.round(allPages)}
    >
      {window.screen.width < 1024 ? (
        <>
          <Page.NextPrev onClick={prevPage} className="prev_page">
            <AiOutlineLeft />
          </Page.NextPrev>
          <span>
            Página <strong>{page}</strong> de{" "}
            <strong>{Math.round(allPages)}</strong>
          </span>
          <Page.NextPrev onClick={nextPage} className="next_page">
            <AiOutlineRight />
          </Page.NextPrev>
        </>
      ) : (
        <>
          <span>
            Página <strong>{page}</strong> de{" "}
            <strong>{Math.round(allPages)}</strong>
          </span>
          <Page.NextPrev onClick={prevPage} className="prev_page">
            <AiOutlineLeft />
          </Page.NextPrev>
          <Page.NextPrev onClick={nextPage} className="next_page">
            <AiOutlineRight />
          </Page.NextPrev>
        </>
      )}
    </Page.Container>
  );
};

export default Pagination;
