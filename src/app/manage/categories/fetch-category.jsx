"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase";
const CategoryTable = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "categories"));
      const data = querySnapshot.docs.map((doc) => doc.data());
      setCategories(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div className="table-container">
      <h1>Category Table</h1>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Category Name</th>
            <th>Category Type</th>
            <th></th>
            <th><button className="btns" id="addCat">Add New Category</button></th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.categoryName}>
              <td>{category.categoryName}</td>
              <td>{category.categoryType}</td>
              <td><button className="btns" id="editbtn">Edit</button></td>
              <td><button className="btns" id="delbtn">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;
