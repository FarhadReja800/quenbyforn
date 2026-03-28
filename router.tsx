import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./src/pages/Home/layout";
import Home from "./src/pages/Home";
import Members from "@/pages/Members";
import StrategicPartners from "@/pages/PartnersDetails/_components/PartnerDetails";
import NewMember from "@/pages/NewMember";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/members",
        element: <Members/>
      },
      {
        path: "/partners",
        element: <StrategicPartners/>
      },
      {
        path: "/partners/newmembers",
        element: <NewMember/>
      }
      
    ],
  },
])

export default router;