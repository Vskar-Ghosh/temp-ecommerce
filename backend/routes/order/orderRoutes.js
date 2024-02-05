const orderController = require("../../controllers/order/orderController");

const router = require("express").Router();

router.post("/order/place-order", orderController.place_order);
router.get(
  "/customer/get-orders/:customerId/:status",
  orderController.get_orders
);
router.get("/customer/get-order/:orderId", orderController.get_order);
router.get(
  "/customer/get-dashboard-data/:userId",
  orderController.get_dashboard_index_data
);

module.exports = router;
