import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
          
        <div>
          <h1>Home</h1>
          <a href="/manage/products/add-product">Add Product</a>
          <a href="/manage/categories/add-category">Add Category</a>
        </div>
      </main>
    </>
  );
}
