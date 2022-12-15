import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../Components/Header';
import { statuCheckAction } from '../redux/categories/categories';

const CategoryPage = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.category);
  const statutclickHandler = () => {
    dispatch(statuCheckAction);
  };
  return (
    <div className="container">
      <Header />
      <section className="section">
        <p>{status}</p>
        <button className="category_button" type="button" onClick={statutclickHandler}>Check status</button>
      </section>

    </div>
  );
};

export default CategoryPage;
