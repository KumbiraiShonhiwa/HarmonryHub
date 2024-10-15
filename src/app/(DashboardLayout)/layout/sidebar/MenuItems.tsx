import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";
import { title } from "process";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Customer",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
  },
  {
    navlabel: true,
    subheader: "Auth",
  },
  {
    id: uniqueId(),
    title: "Login",
    icon: IconLogin,
    href: "/authentication/login",
  },
  {
    id: uniqueId(),
    title: "Register",
    icon: IconUserPlus,
    href: "/authentication/register",
  },
  {
    navlabel: true,
    subheader: "Admin",
  },
  {
    id: uniqueId(),
    title: "Stock Information",
    icon: IconCopy,
    href: "/stock",
  },
  {
    id: uniqueId(),
    title: "Sales",
    icon: IconMoodHappy,
    href: "/checksales",
  },
  {
    id: uniqueId(),
    title: "Add New Product",
    icon: IconAperture,
    href: "/uploadnewproducts",
  },
  {
    id: uniqueId(),
    title: "Update Product",
    icon: IconAperture,
    href: "/updateproducts",
  },
];

export default Menuitems;
