import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-8xl font-bold text-blue-600">
                404
            </h1>

            <h2 className="text-3xl font-semibold mt-4">
                Page Not Found
            </h2>

            <p className="text-gray-500 mt-3">
                Sorry, the page you're looking for doesn't exist.
            </p>

            <Link
                to="/"
                className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
            >
                Go Home
            </Link>
        </div>
    );
};

export default NotFound;