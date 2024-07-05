import { Container, Row, Col } from "react-bootstrap";
import { Product } from "@components/ecommerce";
import { useAppDispatch, useAppSelector } from "@store/hook";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { TProduct } from "@customTypes/product";
import { actGetProductsByCatPrefix } from "@store/products/productsSlice";
const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);
  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));
  }, [dispatch, params]);

  const productsList =
    records.length > 0
      ? records.map((record: TProduct) => {
          return (
            <Col
              key={record.id}
              xs={6}
              md={3}
              className="d-flex justify-content-center mb-5 mt-2"
            >
              <Product {...record} />
            </Col>
          );
        })
      : "There are no categories";

  return (
    <Container>
      <Row>{productsList}</Row>
    </Container>
  );
};

export default Products;
