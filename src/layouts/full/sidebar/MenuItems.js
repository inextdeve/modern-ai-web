import {
  IconAperture,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconDeviceCctv,
  IconUserPlus,


} from "@tabler/icons-react";
import { ServerIcon, Users, ChartDots } from "src/components/shared/Icons";
import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Home",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/dashboard",
  },
  {
    navlabel: true,
    subheader: "Utilities",
  },
  {
    id: uniqueId(),
    title: "Cameras",
    icon: IconDeviceCctv,
    href: "/cameras",
  },
  {
    id: uniqueId(),
    title: "Servers",
    icon: ServerIcon,
    href: "/servers",
  },
  {
    id: uniqueId(),
    title: "Users",
    icon: Users,
    href: "/users",
  },
  {
    id: uniqueId(),
    title: "Video Analytics",
    icon: ChartDots,
    href: "/analytics",
  },
  {
    navlabel: true,
    subheader: "Settings",
  },
  {
    navlabel: true,
    subheader: "Extra",
  },
  {
    id: uniqueId(),
    title: "Sample Page",
    icon: IconAperture,
    href: "/sample-page",
  },
];

export default Menuitems;
