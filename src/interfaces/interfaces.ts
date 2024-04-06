export interface EventState {
    events: Event[];
    event: Event;
}

export interface ToastState {
    message: string;
}

export interface Event {
    id?:         string;
    name:        string;
    description: string;
    date:        string;
    location?:    Location;
}

export interface Location {
    id:       number;
    name:     string;
    latitude: string;
    length:   null | string;
}