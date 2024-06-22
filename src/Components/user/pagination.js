import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ TotalPages, Clicker }) => {
  const handlePageClick = (e) => {
    Clicker(e.selected + 1);
  };
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center p-3  "}
        pageRangeDisplayed={5}
        pageCount={TotalPages}
        previousLabel="<"
        renderOnZeroPageCount={null}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Pagination;
