import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className="flex flex-col text-center mt-24">
            <h1 className="font-bold text-center text-5xl">Oops!!</h1>
            <i className="text-3xl  text-center mt-5">{error.statusText || error.message}</i>
            {
                error.status === 404 && <div>
                    <h3 className="text-3xl  mt-5">Page not found</h3>
                </div>
            }
            <div className="flex justify-center">
                <img className="w-[300px]" src="https://joynul2024.sirv.com/page-not-found.png" alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;