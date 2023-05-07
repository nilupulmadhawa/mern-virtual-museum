import React from 'react';
import ShopCategoryTable from './ShopCategoryTable';
import ShopProductTable from './ShopProductTable';
// import ShopOrderTable from './ShopOrderTable';

export default function ShopMainPage() {
  return (
    <div>
      <h1>Shop Management</h1>
      <br />
      <ShopCategoryTable />
      <br />
      <ShopProductTable />
      <br />
      {/* <ShopOrderTable /> */}
    </div>
  );
}
