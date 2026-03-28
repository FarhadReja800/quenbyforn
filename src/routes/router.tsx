import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "@/pages/Home/layout";
import Home from "@/pages/Home";
import Members from "@/pages/Members";
import StrategicPartners from "@/pages/PartnersDetails/_components/PartnerDetails";
import NewMember from "@/pages/NewMember";
import RedioProgram from "@/pages/RedioProgram";


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
      },
      {
        path: "/partners/redioprogram",
        element: <RedioProgram/>
      },
      
    ],
  },
])

export default router;