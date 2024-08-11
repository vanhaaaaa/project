import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import OrderInfo from './OrderInfo';

const SendEmail = ({ order }) => {
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
    
            to_name: 'Người nhận', // Thay đổi theo yêu cầu
            from_name: 'Người gửi', // Thay đổi theo yêu cầu
            order_id:1 ,
            order_date: 1,
            order_total: 1,
            order_items: order.items.map(item => `${item.name} - $${item.price} x ${item.quantity}`).join(', ')
       
    };

    emailjs.send('service_dcz6j6e', 'template_iz3lxeo', templateParams, 'CLDXjq5yFH9XUUYGD')
      .then(response => {
        setStatus('Gửi email thành công!');
      }, error => {
        setStatus('Gửi email thất bại.');
      });
  };

  return (
    <div>
      <button onClick={sendEmail}>Gửi thông tin đơn hàng qua email</button>
      {status && <p>{status}</p>}
    </div>
  );
};

export default SendEmail;