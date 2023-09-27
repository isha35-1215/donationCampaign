import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="h-[80vh] flex justify-center items-center">
            <div className='text-center'>
            <h1 className='text-9xl font-extrabold'>404</h1>
            <h2 className='text-4xl font-bold my-10'>Page Not Found</h2>
            <Link to="/"><button className="px-4 py-2 my-6  rounded-xl text-xl font-medium bg-gray-200 block mx-auto">Go Back To Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;