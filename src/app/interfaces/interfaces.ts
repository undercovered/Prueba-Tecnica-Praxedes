
/* Personajes */

export interface Character {
    info:          Info;
    results:       Results[];
}
export interface Info{
    count:         number;
    pages:         number;
    next:          string;
    prev:          string;
}
export interface Results{
    id:            number;
    name:          string;
    status:        string;
    species:       string;
    type:          string;
    gender:        string;
    origin:        Origin;
    location:      Location;
    image:         string;
    episode:       string[];
    url:           string;
    created:       string;
}

export interface Origin{
    name:       string;
    url:        string;
}


export interface Location {
    name:       string;
    url:        string;
}


/* Episodios */
export interface Episodios {
    info:    Info;
    results: Result[] | undefined;
}

export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  string;
}

export interface Result {
    id:         number;
    name:       string;
    air_date:   string;
    episode:    string;
    characters: string[];
    url:        string;
    created:    Date;
}

export interface Registro {
    nombre: string;
    apellido: string;
    doctoIdent: string;
    email: string;
    clave: string;
    cia: string;
}

export interface Login {
    password: string;
    companyId: string;
    username: string;
    desdeMs: boolean
}

