import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { toysMenuList } from "../Constant/ToysMenuList";
import { Link } from "react-router-dom";
import SelectTag from "../Components/SelectTag";
import SideBarList from "../Components/SideBarList";
import axios from "axios";
import Pagination from "../Components/Pagination";
import SelectedProduct from "../Components/SelectedProduct";

const CoverImgResultPage = () => {
  const [allData, setAllData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const limitValue = 12;
  const [selectData, setSelectData] = useState("");
  const [category, setCategory] = useState([]);

  const fetchData = async () => {
    const offset = pageNumber * limitValue;
    const response = await axios.get(
      `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limitValue}`
    );
    setAllData(response.data);
  };

  const allProducts = async () => {
    const product = await axios.get("https://api.escuelajs.co/api/v1/products");
    setTotalCount(product?.data?.length);
  };
  useEffect(() => {
    fetchData();
    allProducts();
    // eslint-disable-next-line
  }, [pageNumber]);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setPageNumber(selectedPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const totalPageCount = Math.ceil(totalCount / limitValue);

  const handleSelect = async (id) => {
    try {
      const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
      setSelectData(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };
  // const categoryList = async()=>{
  //   const res = await axios.get('https://api.escuelajs.co/api/v1/categories')
  //   console.log();(res?.data)
  // }

  const handleCategory = async (id) => {
    const result = await axios.get(
      `https://api.escuelajs.co/api/v1/categories/${id}/products`
    );
    setCategory(result?.data);
    console.log(result?.data);
  };

  return (
    <>
      <div className="bg-white">
        <div
          className="d-flex flex-row text-nowrap px-3 py-1"
          style={{ backgroundColor: "#fafafa" }}
        >
          <Row>
            {toysMenuList?.map((menu, i) => (
              <Col key={i}>
                <Link
                  to={`/${menu}`}
                  className="text-decoration-none text-dark fs-12 result-menu"
                >
                  {menu}
                </Link>
              </Col>
            ))}
          </Row>
        </div>
        <div>
          <Row>
            <Col>
              <div className="d-flex flex-row align-items-center px-3 bg-white">
                <span>1-24 of 616 results</span>
                <SelectTag
                  className={"w-25 ms-auto"}
                  title={"Bestselling"}
                  option={[
                    "Bestselling",
                    "Price: Low to High",
                    "Price: High to Low",
                    "Avg. Customer Review",
                    "Newest Arrivals",
                  ]}
                />
              </div>
            </Col>
          </Row>
        </div>
        <Row>
          <Col lg={2}>
            <SideBarList />
          </Col>
          <Col lg={10}>
            <Row>
            {selectData ? (
  <SelectedProduct
    image={selectData?.images}
    title={selectData?.title}
    description={selectData?.description}
    price={selectData?.price}
    category={selectData?.category?.name}
  />
) : (
  <>
    {category.length > 0 ? (
      category.map((result, index) => (
        <Col lg={3} key={index}>
          <div
            className="card p-2 my-3 product-details"
            onClick={() => handleSelect(result?.id)}
          >
           <img
                        src={result?.images[0]}
                        alt={`Slide ${index + 1}`}
                        style={{ width: "220px", height: "250px" }}
                      />
                      <div>
                        <Link className="text-decoration-none card-link link-truncate">
                          {result?.title}
                        </Link>
                      </div>
                      <h4>₹{result?.price}</h4>
                      <small className="des-truncate">
                        {result?.description}
                      </small>
                    </div>
                
                  </Col> 
                  ))
                  ) : (
                    allData.map((result, index) => (
                      <Col lg={3} key={index}>
                        <div
                          className="card p-2 my-3 product-details"
                          onClick={() => handleSelect(result?.id)}
                        >
                         <img
                        src={result?.images[0]}
                        alt={`Slide ${index + 1}`}
                        style={{ width: "220px", height: "250px" }}
                      />
                      <div>
                        <Link className="text-decoration-none card-link link-truncate">
                          {result?.title}
                        </Link>
                      </div>
                      <h4>₹{result?.price}</h4>
                      <small className="des-truncate">
                        {result?.description}
                      </small>
                    </div>
                    <small className="mt-2">
                      Category :{" "}
                      <Link
                        className="fs-6 fw-bold card-link text-decoration-none"
                        onClick={() => handleCategory(result?.category?.id)}
                      >
                        {result?.category?.name}
                      </Link>
                    </small>
                  </Col> 
                  ))
                  )}
                </>
              )}
            </Row>
            {/* <Row>
              {category.length > 0 ? (
                category.map((result, index) => (
                  <Col lg={3} key={index}>
                    <div
                      className="card p-2 my-3 product-details"
                      onClick={() => handleSelect(result?.id)}
                    >
                      <img
                        src={result?.images[0]}
                        alt={`Slide ${index + 1}`}
                        style={{ width: "220px", height: "250px" }}
                      />
                      <div>
                        <Link className="text-decoration-none card-link link-truncate">
                          {result?.title}
                        </Link>
                      </div>
                      <h4>₹{result?.price}</h4>
                      <small className="des-truncate">
                        {result?.description}
                      </small>
                    </div>
                
                  </Col>
                ))
              ) : selectData.length > 0 && selectData ? (
                <SelectedProduct
                  image={selectData?.images}
                  title={selectData?.title}
                  description={selectData?.description}
                  price={selectData?.price}
                  category={selectData?.category?.name}
                />
              ) : (
                allData.map((result, index) => (
                  <Col lg={3} key={index}>
                    <div
                      className="card p-2 my-3 product-details"
                      onClick={() => handleSelect(result?.id)}
                    >
                      <img
                        src={result?.images[0]}
                        alt={`Slide ${index + 1}`}
                        style={{ width: "220px", height: "250px" }}
                      />
                      <div>
                        <Link className="text-decoration-none card-link link-truncate">
                          {result?.title}
                        </Link>
                      </div>
                      <h4>₹{result?.price}</h4>
                      <small className="des-truncate">
                        {result?.description}
                      </small>
                    </div>
                    <small className="mt-2">
                      Category :{" "}
                      <Link
                        className="fs-6 fw-bold card-link text-decoration-none"
                        onClick={() => handleCategory(result?.category?.id)}
                      >
                        {result?.category?.name}
                      </Link>
                    </small>
                  </Col>
                ))
              )}
            </Row> */}
          </Col>
        </Row>
      </div>
      {selectData ? null : (
        <Pagination
          handlePageClick={handlePageClick}
          pageNumber={pageNumber}
          totalPageCount={totalPageCount}
        />
      )}
    </>
  );
};

export default CoverImgResultPage;