import {
  LayoutDashboard,
  Layers,
  FileStack,
  BarChart2,
  Puzzle,
  Settings,
  MousePointerClick,
  TextCursorInput,
  AppWindow,
  MonitorSmartphone,
  LayoutTemplate,
  ShieldCheck,
  PieChart,
  Table2,
} from "lucide-react";

export const navItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    link: "/",
  },
  {
    icon: Layers,
    label: "Components",
    submenu: [
      {
        icon: MousePointerClick,
        label: "Buttons",
        link: "/docs/buttonDocs",
      },
      {
        icon: TextCursorInput,
        label: "Inputs",
        link: "/docs/inputs",
      },
      {
        icon: AppWindow,
        label: "Modals",
        link: "/docs/modals",
      },
    ],
  },
  {
    icon: FileStack,
    label: "Templates",
    submenu: [
      { icon: MonitorSmartphone, label: "Landing", link: "/docs/landing" },
      { icon: LayoutTemplate, label: "Dashboard", link: "/docs/dashboard" },
      { icon: ShieldCheck, label: "Auth", link: "/docs/auth" },
    ],
  },
  {
    icon: BarChart2,
    label: "Analytics",
    link: "/analytics",
  },
  {
    icon: Puzzle,
    label: "Plugins",
    submenu: [
      { icon: PieChart, label: "Charts", link: "/docs/charts" },
      { icon: Table2, label: "Tables", link: "/docs/tables" },
    ],
  },
  {
    icon: Settings,
    label: "Settings",
    link: "/settings",
  },
];