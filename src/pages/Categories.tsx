import { Category } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import { actGetCategories } from "@store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@store/hook";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (records.length === 0) {
      // Check if records array is empty
      dispatch(actGetCategories());
    }
  }, [dispatch, records.length]);

  let categoriesList = null;

  if (loading === "pending") {
    return <h1>Loading...</h1>;
  } else if (records.length === 0 && loading === "succeeded") {
    categoriesList = <p>There are no categories.</p>;
  } else {
    categoriesList = records.map((record) => (
      <Col
        key={record.id}
        xs={6}
        md={3}
        className="d-flex justify-content-center mb-5 mt-2"
      >
        <Category {...record} />
      </Col>
    ));
  }

  return (
    <Container>
      <Loading status={loading} error={error}>
        <Row>{categoriesList}</Row>
      </Loading>
    </Container>
  );
};

export default Categories;
