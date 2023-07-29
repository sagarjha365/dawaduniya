import React from 'react'
import Link from 'next/link';
const page = () => {
  return (
    <>
    <main>
        <div className="container">
            <div className="navigations">
                <Link href="/manage/products">Products </Link>
                <Link href="/manage/categories">Categories </Link>
                <Link href="/manage/users">Users </Link>
                <Link href="/manage/orders">Orders </Link>
            </div>
        </div>
    </main>
    </>

  )
}

export default page