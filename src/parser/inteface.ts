export interface Query extends QueryParams{
    query: QueryParams;
}

export interface QueryParams{
    city: string;
    item: string;
}

