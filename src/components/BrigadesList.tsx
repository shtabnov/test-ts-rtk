import BrigadesCard from './BrigadesCard';
import { IBrigades, IConnectionState, IDepartment } from '../data/models';
import { FC } from 'react';

import {
    useGetDepartmentsQuery,
    useGetConnectionStateQuery,
} from '../store/api/dataAPI';

interface BrigadesListProps {
    brigades: IBrigades[] | undefined;
    filterConnectionValue: any;
    filterDepartmentValue: any;
    setQuantityBrigades: any;
}

const BrigadesList: FC<BrigadesListProps> = ({
    brigades,
    filterConnectionValue,
    filterDepartmentValue,
    setQuantityBrigades,
}) => {
    const { data: departments } = useGetDepartmentsQuery();
    const { data: connectionState } = useGetConnectionStateQuery();

    const filtredBrigades =
        brigades &&
        brigades
            .filter((brigade) => {
                if (filterDepartmentValue === undefined) {
                    return brigade;
                } else {
                    return brigade.department.id === filterDepartmentValue;
                }
            })
            .filter((brigade) => {
                if (filterConnectionValue === undefined) {
                    return brigade;
                } else {
                    return brigade.connectionStateId === filterConnectionValue;
                }
            });
    filtredBrigades && setQuantityBrigades(filtredBrigades.length);
    return (
        <div className="container w-full flex flex-wrap gap-3 justify-evenly mx-auto my-4 max-sm:mx-2">
            {filtredBrigades?.map((brigade: IBrigades) => {
                return (
                    <BrigadesCard
                        key={brigade.id}
                        brigade={brigade}
                        department={
                            departments?.filter((department: IDepartment) => {
                                return department.id === brigade.department.id;
                            })[0]
                        }
                        connectionState={
                            connectionState?.filter(
                                (cconnection: IConnectionState) => {
                                    return (
                                        cconnection.connectionStateId ===
                                        brigade.connectionStateId
                                    );
                                }
                            )[0]
                        }
                    />
                );
            })}
        </div>
    );
};

export default BrigadesList;
