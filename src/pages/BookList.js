import { Link } from "react-router-dom"

export function BookList() {
    return (
        <>
            <h1>BookList</h1>
            <Link to="/books/1">Book 1</Link>
        </>
    )
}