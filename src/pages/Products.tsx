import { Container } from "react-bootstrap";
import { Product } from "@components/eCommerce";
import { useAppDispatch, useAppSelector } from "@store/hook";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  actGetProductsByCatPrefix,
  productsCleanUp,
} from "@store/products/productsSlice";
import { Loading } from "@components/feedback";
import { GridList } from "@components/common";
import { TProduct } from "@customTypes/product";
const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);
  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));
    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);

  return (
    <Container>
      <Loading status={loading} error={error}>
        <GridList
          records={records}
          renderItem={(record: TProduct) => <Product {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Products;
