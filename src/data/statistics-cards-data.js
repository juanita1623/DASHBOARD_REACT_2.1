import {
  BanknotesIcon,
  UserPlusIcon,
  UsersIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "gray",
    icon: BanknotesIcon,
    title: "Dinero de Hoy",
    value: "$53k",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "Que la semana pasada",
    },
  },
  {
    color: "gray",
    icon: UsersIcon,
    title: "Usuarios de Hoy",
    value: "2,300",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "Que el mes pasado",
    },
  },
  {
    color: "gray",
    icon: UserPlusIcon,
    title: "Nuevos Clientes",
    value: "3,462",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "Que Ayer",
    },
  },
  {
    color: "gray",
    icon: ChartBarIcon,
    title: "Ventas",
    value: "$103,430",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "Que el viernes pasado",
    },
  },
];

export default statisticsCardsData;
