import { useGetBrigadesQuery } from './store/api/dataAPI';
import Filters from './components/Filters';
import Loading from './components/Loading';
import BrigadesList from './components/BrigadesList';

function App() {
    const { data: brigades, isLoading, error } = useGetBrigadesQuery();

    let content;

    if (isLoading) {
        content = <Loading />;
    }
    if (!isLoading) {
        content = (
            <>
                <header className="w-screen sticky top-0 z-10">
                    <Filters />
                </header>
                <BrigadesList brigades={brigades} />
            </>
        );
    }

    if (error) {
        content = <h1>{JSON.stringify(error)}</h1>;
    }

    return (
        <div className="container h-screen mx-auto flex flex-wrap gap-3 items-center justify-center">
            {content}
        </div>
    );
}

export default App;
