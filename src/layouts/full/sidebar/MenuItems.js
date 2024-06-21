import {
  IconAperture,
  IconLayoutDashboard,
  IconDeviceCctv,
} from "@tabler/icons-react";
import { ServerIcon, Users, ChartDots } from "src/components/shared/Icons";
import { uniqueId } from "lodash";
import i18next from "../../../i18n";
import { useTranslation } from "react-i18next";

const Trans = ({ value }) => {
  const { t } = useTranslation();
  return <>{t(value)}</>;
};

const Menuitems = [
  {
    navlabel: true,
    subheader: <Trans value="globals.home" />,
  },

  {
    id: uniqueId(),
    title: <Trans value="globals.dashboard" />,
    icon: IconLayoutDashboard,
    href: "/dashboard",
  },
  {
    navlabel: true,
    subheader: <Trans value="globals.utilities" />,
  },
  {
    id: uniqueId(),
    title: <Trans value="globals.cameras" />,
    icon: IconDeviceCctv,
    href: "/cameras",
  },
  {
    id: uniqueId(),
    title: <Trans value="globals.servers" />,
    icon: ServerIcon,
    href: "/servers",
  },
  {
    id: uniqueId(),
    title: <Trans value="globals.users" />,
    icon: Users,
    href: "/users",
  },
  {
    id: uniqueId(),
    title: <Trans value="globals.videoAnalytics" />,
    icon: ChartDots,
    href: "/video-analytics",
  },
  {
    id: uniqueId(),
    title: <Trans value="globals.analytics" />,
    icon: ChartDots,
    href: "/analytics",
  },
  {
    navlabel: true,
    subheader: <Trans value="globals.settings" />,
  },
  {
    id: uniqueId(),
    title: <Trans value="globals.settings" />,
    icon: ChartDots,
    href: "/settings",
  },
  {
    navlabel: true,
    subheader: <Trans value="globals.extra" />,
  },
  {
    id: uniqueId(),
    title: <Trans value="globals.sample" />,
    icon: IconAperture,
    href: "/sample-page",
  },
];

export default Menuitems;
