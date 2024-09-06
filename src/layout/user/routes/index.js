import {
  AddShoppingCart,
  DeliveryDining,
  EmojiNature,
  Group,
  LocalPizza,
} from "@mui/icons-material";

export const userRoutes = [
  {
    title: "Shop",
    icon: <AddShoppingCart />,
    path: "shop",
  },
  {
    title: "My Orders",
    icon: <DeliveryDining />,
    path: "orders",
  },
];

export const adminRoutes = [
  {
    title: "Users",
    icon: <Group />,
    path: "users",
  },
  {
    title: "Orders",
    icon: <DeliveryDining />,
    path: "orders",
  },
  {
    title: "Toppings",
    icon: <EmojiNature />,
    path: "toppings",
  },
  {
    title: "Pizzas",
    icon: <LocalPizza />,
    path: "pizzas",
  },
];
