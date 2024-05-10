import React, { useState } from 'react';
import ButtonTag from '../Components/ButtonTag';
import { Card, Col, Row } from 'react-bootstrap';
import ReactImageMagnify from 'react-image-magnify';
import SelectTag from '../Components/SelectTag';
import { useNavigate } from 'react-router-dom';

const SelectedProductPage = ({ selectData,setSelectData, addToCart }) => {
  const [selectImage, setSelectImage] = useState(selectData?.images[0] || '');
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleImgChange = (i) => {
    setSelectImage(selectData?.images[i]);
  };

const handleCart = () => {
    const subtotal = selectData?.price * quantity;
    const updatedSelectData = { ...selectData, subtotal };
    addToCart(updatedSelectData);
    navigate('/cartlist');
  };
  return (
    <>
      <Card className="">
        <Row className='m-0 mt-3 mx-3'>
          <Col lg={4}>
            <div id="magnifier" className="my-2">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: 'img',
                    isFluidWidth: true,
                    src: selectImage,
                  },
                  largeImage: {
                    src: selectImage,
                    width: 1200,
                    height: 1200,
                  },
                }}
              />
            </div>
            <div className="d-flex align-items-center justify-content-evenly mb-3">
              {selectData?.images?.map((img, i) => (
                <img
                  src={img}
                  alt="img"
                  key={i}
                  style={{ width: '120px', height: '120px' }}
                  onClick={() => handleImgChange(i)}
                />
              ))}
            </div>
          </Col>
          <Col lg={8}>
            <Row className='m-0'>
              <Col lg={7}>
                <h1>{selectData?.title}</h1>
                <p>{selectData?.description}</p>
                <h4>₹{selectData?.price}</h4>
                <p>
                  Category : <span className="fw-bold">{selectData?.category?.name}</span>
                </p>
                <p className="d-flex flex-row">
                  Quantity :{' '}
                  <SelectTag
                    title={quantity}
                    option={[2, 3, 4, 5]}
                    className={'w-25'}
                    onChange={(value) => setQuantity(value)}
                  />
                </p>
              </Col>
              <Col lg={4}>
                <div className="d-flex flex-column align-items-center gap-2 p-2 border border-2 h-100">
                  <h4 className='float-start '>₹{selectData?.price}</h4>
                  <ButtonTag
                    label={'Add to Cart'}
                    className={'bg-warning border-0 rounded-pill w-100 text-nowrap'}
                    onClick={handleCart}
                  />
                  <ButtonTag label={'Buy Now'} className={'bg-success border-0 rounded-pill w-100'} />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default SelectedProductPage;