import React from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Product Name",
    selector: "name",
    sortable: true,
  },
  {
    name: "Stock",
    selector: "stock",
    sortable: true,
  },
  {
    name: "Price",
    selector: "price",
    sortable: true,
  },
  {
    name: "Total Sales",
    selector: "totalsales",
    sortable: true,
  },
];
const product = [
  { id: 1, name: "Abstract 3D", stock: 10, price: "$45.99", totalsales: "20" },
  {
    id: 2,
    name: "Sarphens Illustration",
    stock: 5,
    price: "$45.99",
    totalsales: "30",
  },
];

const Productcell = () => {
  return (
    <div className="custom-data-table">
      <DataTable title="Product Sales" columns={columns} data={product} />
    </div>
  );
};

export default Productcell;
