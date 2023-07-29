// pages/add-category.js
"use client";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { showToast } from "@/app/components/toastcomponent";

const AddCategoryPage = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryType, setCategoryType] = useState("service");

  const handleCategoryNameChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleCategoryTypeChange = (e) => {
    setCategoryType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (categoryName) {
      try {
        const docRef = await addDoc(collection(db, "categories"), {
          categoryName: categoryName,
          categoryType: categoryType,
        });
        showToast("Category " + categoryName + " added successfully", {
          type: "success",
        });
        console.log("Document written with ID: ", docRef.id);
        setCategoryName("");
        setCategoryType("service");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      showToast("Category name is missing"),
        {
          type: "failed",
        };
    }
  };

  return (
    <>
      <main>
        <div className="form-container">
          <h1 className="form-heading">Add New Category</h1>
          <hr />
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="categoryName">Category Name:</label>
              <input
                type="text"
                id="categoryName"
                value={categoryName}
                onChange={handleCategoryNameChange}
              />
            </div>
            <div>
              <label htmlFor="categoryType">Category Type:</label>
              <select
                id="categoryType"
                value={categoryType}
                onChange={handleCategoryTypeChange}
              >
                <option value="service">Service</option>
                <option value="product">Product</option>
              </select>
            </div>

            <button type="submit">Add Category</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default AddCategoryPage;
