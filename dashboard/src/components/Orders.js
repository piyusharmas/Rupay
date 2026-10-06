import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/allOrders")
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);
  if (orders.length > 0) {
    return (
      <div className="orders">
        <h3 className="title">Orders ({orders.length})</h3>
        <div className="order-list">
          {orders.map((order) => (
            <div key={order._id} className="order-item">
              <p>{order.name} - Qty: {order.qty}, Price: {order.price}, Mode: {order.mode}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  else {
  return (
    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
}
};

export default Orders;