import { GridList } from "@components/common";
import { Category } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import { TCategory } from "@customTypes/category";
import { actGetCategories } from "@store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@store/hook";
import { useEffect } from "react";
import { Container } from "react-bootstrap";

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
  return (
    <Container>
      <Loading status={loading} error={error}>
        <GridList
          records={records}
          renderItem={(record: TCategory) => <Category {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Categories;
