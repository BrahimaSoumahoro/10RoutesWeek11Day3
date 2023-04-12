const React = require('react');

<html>
  <head>
    <title>Product List</title>
  </head>
  <body>
    <h1>Product List</h1>
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Flavor</th>
          <th>Category</th>
          <th>Unit Size</th>
          <th>Case Dimension</th>
          <th>Case Weight</th>
          <th>UPC</th>
          <th>Case Qty</th>
          <th>MSRP</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.PRODUCT}</td>
            <td>{product.FLAVOR}</td>
            <td>{product.CATEGORY}</td>
            <td>{product["UNIT SIZE"]}</td>
            <td>{product["Case Dimension"]}</td>
            <td>{product["Case Weight"]}</td>
            <td>{product.UPC}</td>
            <td>{product["CASE QTY"]}</td>
            <td>{product.MSRP}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </body>
</html>


module.exports = index; 