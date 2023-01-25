import { useRoutes } from "react-router-dom";
import { Home, About, HelpCenter, ContactUs } from "../features/landing";

export const AppRoutes = () => {

    const commonRoutes = [
        { path: '*', element: <h1>Not Found</h1>},
        { path: '/', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/help-center', element: <HelpCenter /> },
        { path: '/contact-us', element: <ContactUs /> },
    ];

    const element = useRoutes([ ...commonRoutes]);

    return <>{element}</>;
    
};