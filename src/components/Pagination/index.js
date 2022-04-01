import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import * as Page from "./styles";

const Pagination = () => {
  return (
    <Page.Container>
      <div>
        <AiOutlineLeft />
      </div>
      <span>Página 1 de 100</span>
      <div>
        <AiOutlineRight />
      </div>
    </Page.Container>
  );
};

export default Pagination;
