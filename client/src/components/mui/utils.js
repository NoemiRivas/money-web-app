/**
 * icons material ui
 */
import DashboarIcon from "@mui/icons-material/Dashboard";
import TransactionsIcon from "@mui/icons-material/Receipt";
import CategoriesIcon from "@mui/icons-material/Category";
import AccountsIcon from "@mui/icons-material/AccountBalance";
import BudgetIcon from "@mui/icons-material/AccountBalanceWallet";
import ReportsIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
/**
 * This is data for the sidebar
 */

const listMenuItems = [
  {
    id: 1,
    name: "dashboard",
    link: "/dashboard",
    icon: DashboarIcon,
  },
  {
    id: 2,
    name: "transacciones",
    link: "/transacciones",
    icon: TransactionsIcon,
  },
  {
    id: 3,
    name: "categorías",
    link: "/categorias",
    icon: CategoriesIcon,
  },
  /*
  
  {
    id: 4,
    name: "cuentas",
    link: "/accounts",
    icon: AccountsIcon,
  },
  {
    id: 5,
    name: "presupuesto",
    link: "/budget",
    icon: BudgetIcon,
  },
  {
    id: 6,
    name: "reportes",
    link: "/reports",
    icon: ReportsIcon,
  },
  
  */
  {
    id: 7,
    name: "configuración",
    link: "/perfil",
    icon: SettingsIcon,
    classes: "relative top-60",
  },
];

export { listMenuItems };
