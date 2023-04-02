import React from "react";
import ReactPaginate from "react-paginate";
function Pagination({ getPage, totalPages }) {
  const handlePageClick = (data) => {
    getPage(data.selected + 1);
  };
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      pageCount={totalPages}
      previousLabel="< previous"
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link pagg"}
      previousClassName={"page-item"}
      nextClassName={"page-item "}
      previousLinkClassName={"page-link click"}
      nextLinkClassName={"page-link click"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link pagg"}
      activeClassName={"active"}
    />
  );
}

export default Pagination;
