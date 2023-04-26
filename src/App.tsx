import { useGetBrigadesQuery } from './store/api/dataAPI';
import { useState } from 'react';
import Filters from './components/Filters';
import Loading from './components/Loading';
import Error from './components/Error';
import BrigadesList from './components/BrigadesList';

function App() {
    const { data: brigades, isLoading, error } = useGetBrigadesQuery();

    const [filterConnectionValue, setFilterConnectionValue] = useState<
        number | undefined
    >(undefined);
    const [filterDepartmentValue, setFilterDepartmentValue] = useState<
        number | undefined
    >(undefined);

    const [quantityBrigades, setQuantityBrigades] = useState<number>(0);

    return (
        <div className="container h-screen mx-auto flex flex-wrap gap-3 items-center justify-center">
            {isLoading && <Loading />}
            {error && <Error error={error} />}
            {!isLoading && !error && (
                <>
                    <header className="w-screen sticky top-0 z-10">
                        <Filters
                            setFilterConnectionValue={setFilterConnectionValue}
                            setFilterDepartmentValue={setFilterDepartmentValue}
                            quantityBrigades={quantityBrigades}
                        />
                    </header>
                    <BrigadesList
                        brigades={brigades}
                        filterConnectionValue={filterConnectionValue}
                        filterDepartmentValue={filterDepartmentValue}
                        setQuantityBrigades={setQuantityBrigades}
                    />
                </>
            )}
        </div>
    );
}

export default App;
