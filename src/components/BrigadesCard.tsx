import { IBrigades, IConnectionState, IDepartment } from '../data/models';
import { Card } from 'antd';
import { CheckCircleOutlined, StopOutlined } from '@ant-design/icons';
import { FC } from 'react';

interface PropBrigadesCard {
    brigade: IBrigades;
    department: IDepartment | undefined;
    connectionState: IConnectionState | undefined;
}

const BrigadesCard: FC<PropBrigadesCard> = ({
    brigade,
    department,
    connectionState,
}) => {
    return (
        <Card
            size="small"
            title={brigade.brigade_name}
            className="w-60 max-sm:w-9/12 shadow-xl"
        >
            <h3 className="text-lg leading-10">{department?.name}</h3>
            <p>
                <b>Соединение: </b>
                <span
                    className={`${
                        connectionState?.connectionStateId
                            ? 'text-green-500'
                            : 'text-red-500'
                    }
                    `}
                >
                    {connectionState?.name}
                </span>
                <span className="text-blue-500 ml-2">
                    {connectionState?.connectionStateId ? (
                        <CheckCircleOutlined />
                    ) : (
                        <StopOutlined />
                    )}
                </span>
            </p>
            <p>
                <b>Кластер: </b> {brigade.position.cluster}
            </p>
            <p>
                <b>Поле: </b> {brigade.position.field}
            </p>
            <p>
                <b>Скважина: </b> {brigade.position.well}
            </p>
        </Card>
    );
};

export default BrigadesCard;
