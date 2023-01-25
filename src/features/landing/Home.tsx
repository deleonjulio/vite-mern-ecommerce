import { useNavigate } from "react-router-dom";

const routes = [
    {id: 1, route: '/about'},
    {id: 2, route: '/help-center'},
]

export const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <h1>This is home page</h1>
            
            {/* loop here 
                routes.map()
            */}

            <button onClick={() => navigate('/contact-us')}>Go to contact-us</button>
        </>
    )
};