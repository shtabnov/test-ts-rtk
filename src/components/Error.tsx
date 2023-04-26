interface ErrorProps {
    error: string;
}
const Error = ({ error }: ErrorProps) => {
    return <h1 className="text-red-500">{error}</h1>;
};

export default Error;
