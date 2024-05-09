import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({handlePageClick,pageNumber,totalPageCount}) => {
  return (
    <>
    <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={totalPageCount}
        onPageActive={pageNumber}
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center mt-3"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousLinkClassName={"page-link"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        activeClassName={"active activePage"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
      />
    </>
  )
}

export default Pagination