import { Link, Outlet } from "react-router-dom";

export function BookLayout() {
    return (
        <>
            <Link to="/books/1">Book 1</Link>
            <br />
            <Link to="/books/2">Book 2</Link>
            <br />
            <Link to="/books/new">New Book</Link>
            {/* having an outlet component here from react-router-dom allows us to have all of our routes in where it's been included */}
            <Outlet context={{ hello: "world" }} />

        </>
    )
}