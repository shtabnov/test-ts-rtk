export interface IBrigades {
    id: number;
    brigade_name: string;
    connectionStateId: number;
    department: {
        id: number;
    };
    position: {
        field: string;
        cluster: number;
        well: number;
    };
}

export interface IDepartment {
    id: number;
    name: string;
}

export interface IConnectionState {
    connectionStateId: number;
    name: string;
}
