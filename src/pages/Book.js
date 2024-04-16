import { useOutletContext, useParams } from "react-router-dom";

export function Book() {
    // using useParams will help us to have access to the dynamic parts of our url in the path of our routes
    const { id } = useParams();
    // using useOutletContext will help us to have access to the context property specified in our Outlet component
    const obj = useOutletContext();
    return <h1>Book {id} {obj.hello}</h1>
}