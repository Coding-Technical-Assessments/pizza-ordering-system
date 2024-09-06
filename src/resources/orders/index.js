// Single user records
export const orderResource = (order) => {
  return {
    id: order.orderId,
  };
};

// Multiple users records
export const orderCollection = (orders) => {
  return orders.map((order) => orderResource(order));
};
