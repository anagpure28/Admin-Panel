import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initailGender = searchParams.getAll("gender");
  const initialCategory = searchParams.getAll("category");
  const initialOrder = searchParams.get("order");
  const [gender, setGender] = useState(initailGender || []);
  const [category, setCategory] = useState(initialCategory || []);
  const [order, setOrder] = useState(initialOrder || "")

  // console.log(searchParams.getAll("gender"));

  useEffect(() => {
    let params = {
      gender,
      category,
    };

    order && (params.order = order)
    setSearchParams(params);
    //
    // console.log(gender,category,order)
  }, [gender, category, order]);

  const handleCategory = (e) => {
    const { value } = e.target;
    let newCategory = [...category];
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  };

  const handleSort = (e) => {
    const {value} = e.target;
    setOrder(value);
  }

  const handleGender = (e) => {
    const { value } = e.target;
    let newGender = [...gender];
    if (newGender.includes(value)) {
      newGender = newGender.filter((el) => el !== value);
    } else {
      newGender.push(value);
    }
    setGender(newGender);
    console.log(newGender);
  };

  

  return (
    <div style={{borderRight: "1px solid black"}}>
      <div style={{ textAlign: "left" }}>
        <h3>Filter by Gender</h3>
        <div>
          <input
            type="checkbox"
            value={"male"}
            onChange={handleGender}
            checked={gender.includes("male")}
          />
          <label>Men</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={"female"}
            onChange={handleGender}
            checked={gender.includes("female")}
          />
          <label>Women</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={"kids"}
            onChange={handleGender}
            checked={gender.includes("kids")}
          />
          <label>Kids</label>
        </div>
      </div>
      <br />
      <br />
      <div style={{ textAlign: "left" }}>
        <h3>Filter by Category</h3>
        <div>
          <input
            type="checkbox"
            value={"top-wear"}
            onChange={handleCategory}
            checked={category.includes("top-wear")}
          />
          <label>Top Wear</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={"bottom-wear"}
            onChange={handleCategory}
            checked={category.includes("bottom-wear")}
          />
          <label>Bottom Wear</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={"shoes"}
            onChange={handleCategory}
            checked={category.includes("shoes")}
          />
          <label>Shoes</label>
        </div>
      </div>
      <br />
      <br />
      <div style={{ textAlign: "left" }}>
        <h3>Sort by Price</h3>
        <div onChange={handleSort}>
          <div>
            <input type="radio" name="order" value={"asc"} defaultChecked={order==="asc"} />
            <label>Ascending</label>
          </div>
          <div>
            <input type="radio" name="order" value={"desc"} defaultChecked={order==="desc"} />
            <label>Descending</label>
          </div>
        </div>
      </div>
    </div>
  );
};
