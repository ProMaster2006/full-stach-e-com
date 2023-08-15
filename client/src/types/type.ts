
export type itemType = {
    _id: string;
    name: string; 
}

export interface TypeState {
    types: itemType[],
    selectedType: string
}