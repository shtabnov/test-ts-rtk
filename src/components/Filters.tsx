import { Select } from 'antd';
import {
    useGetDepartmentsQuery,
    useGetConnectionStateQuery,
} from '../store/api/dataAPI';
import { IConnectionState, IDepartment } from '../data/models';
import { FC } from 'react';

interface FiltersProps {
    setFilterConnectionValue: any;
    setFilterDepartmentValue: any;
    quantityBrigades: number;
}

const Filters: FC<FiltersProps> = ({
    setFilterConnectionValue,
    setFilterDepartmentValue,
    quantityBrigades,
}) => {
    const { data: departments } = useGetDepartmentsQuery();
    const { data: connectionState } = useGetConnectionStateQuery();

    return (
        <div className="filters p-5 sticky top-0 z-10 bg-slate-200 ">
            <div className="container mx-auto flex flex-col justify-between items-center sm:flex-row">
                <div className="selectContainer flex flex-col sm:flex-row">
                    <div className="select-box w-52">
                        <span>Соединение:</span>
                        <Select
                            defaultValue={undefined}
                            style={{ width: 200 }}
                            allowClear
                            options={connectionState?.map(
                                (status: IConnectionState) => {
                                    return {
                                        id: status.connectionStateId,
                                        value: status.connectionStateId,
                                        label: status.name,
                                    };
                                }
                            )}
                            onChange={(value): void =>
                                setFilterConnectionValue(value)
                            }
                        />
                    </div>
                    <div className="select-box w-52">
                        <span>Департамент:</span>
                        <Select
                            defaultValue={undefined}
                            style={{ width: 200 }}
                            allowClear
                            options={departments?.map(
                                (department: IDepartment) => {
                                    return {
                                        id: department.id,
                                        value: department.id,
                                        label: department.name,
                                    };
                                }
                            )}
                            onChange={(value): void =>
                                setFilterDepartmentValue(value)
                            }
                        />
                    </div>
                    <div className="mt-2 w-52">
                        <h1>Всего бригад {quantityBrigades}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filters;
