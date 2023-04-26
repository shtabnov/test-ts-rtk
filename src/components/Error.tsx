interface ErrorProps {
    error: any;
}
const Error = ({ error }: ErrorProps) => {
    return <h1 className="text-red-500">{error.error}</h1>;
};

export default Error;
