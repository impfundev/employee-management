"use client";

import { Pagination } from "@/lib/types";
import { queryAtom } from "@/stores/queryAtom";
import { useAtom } from "jotai";

export const TablePagination = ({ result }: Pagination) => {
  const [query, setQuery] = useAtom(queryAtom);

  const setPaginate = (value: string | null) => {
    value && setQuery({ ...query, page: value });
  };

  return (
    <nav
      aria-label="Pagination"
      className="uk-width-1-1 uk-flex uk-flex-middle uk-margin-top"
    >
      <ul className="uk-pagination" uk-margin>
        <li>
          <button
            onClick={() => setPaginate(result.previousPage)}
            className="uk-button uk-button-text"
          >
            <span uk-pagination-previous="" />
          </button>
        </li>
        <li>
          <p className="uk-margin-small-left uk-button uk-button-text">
            Page {result.currentPage} of {result.totalPages}
          </p>
        </li>
        <li>
          <button
            onClick={() => setPaginate(result.nextPage)}
            className="uk-button uk-button-text uk-margin-small-left"
          >
            <span uk-pagination-next="" />
          </button>
        </li>
      </ul>
    </nav>
  );
};
