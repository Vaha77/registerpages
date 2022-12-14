import AuthPage from "../components/AuthPage";
import CreatePage from "../components/CreatePage";
import DetailPage from "../components/DetailPage";
import LinkPage from "../components/LinkPage";

export const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    Element: <AuthPage />,
    search: "?",
    hidden: false,
    private: false,
    useParams: true,
  },
  {
    id: 2,
    title: "Properties",
    path: "/properties",
    Element: <CreatePage />,

    search: "?",
    hidden: false,
    private: false,
    useParams: true,
    hidden: true,
    private: false,
  },
  {
    id: 6,
    title: "Selected House",
    path: "/properties:id",
    Element: <DetailPage />,
    search: "?",
    useParams: true,
    hidden: true,
    private: false,
  },
  {
    id: 3,
    title: "Contacts",
    path: "/contacts",
    Element: <LinkPage />,

    search: "?",
    useParams: true,
    hidden: true,
    private: false,
  },
  {
    id: 4,
    title: "Signin",
    path: "/signin",
    Element: <LinkPage />,
    search: "?",
    hidden: true,
    private: false,
  },
  {
    id: 5,
    title: "SignUp",
    path: "/signup",
    Element: <LinkPage />,
    search: "?",
    useParams: true,
    hidden: true,
    private: false,
  },
  {
    id: 6,
    title: "My Proporties",
    path: "/myproporties",
    Element: <LinkPage />,
    search: "?",
    useParams: true,
    hidden: true,
    private: false,
  },
  {
    id: 7,
    title: "Add New ",
    path: "/proporties/addnew",
    Element: <LinkPage />,
    search: "?",
    useParams: true,
    hidden: true,
    private: false,
  },
  {
    id: 8,
    title: " Edit Item",
    path: "/proporties/addnew/:id",
    Element: <LinkPage />,
    search: "?",
    useParams: true,
    hidden: true,
    private: false,
  },
];
