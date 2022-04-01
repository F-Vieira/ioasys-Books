import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import { useBook } from "../../providers/Book";

import * as Page from "./styles";

const Pagination = () => {
  const { allPages, page, setPage } = useBook();

  const nextPage = () => {
    if (page < allPages) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <Page.Container disablePrev={page === 1} disableNext={page === allPages}>
      <Page.NextPrev onClick={prevPage} className="prev_page">
        <AiOutlineLeft />
      </Page.NextPrev>
      <span>
        Página <strong>{page}</strong> de <strong>{allPages}</strong>
      </span>
      <Page.NextPrev onClick={nextPage} className="next_page">
        <AiOutlineRight />
      </Page.NextPrev>
    </Page.Container>
  );
};

export default Pagination;
