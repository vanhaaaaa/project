import React from 'react';

const OrderInfo = ({ order }) => {
  return (
    <div>
      <h2>Thông tin đơn hàng</h2>
      <p><strong>Mã đơn hàng:</strong> {order.id}</p>
      <p><strong>Ngày đặt:</strong> {order.date}</p>
      <p><strong>Tổng tiền:</strong> ${order.total}</p>
      <p><strong>Danh sách sản phẩm:</strong></p>
      <ul>
        {order.items.map(item => (
          <li key={item.id}>{item.name} - ${item.price} x {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrderInfo;