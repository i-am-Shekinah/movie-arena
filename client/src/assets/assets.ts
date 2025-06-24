// assets.ts
import appStore from './appStore.svg';
import googlePlay from './googlePlay.svg';
import noBGLogo from './logo-without-bg.svg';
import logo from './logo.svg';
import marvelLogo from './marvelLogo.svg';
import profile from './profile.png';
import screenImage from './screenImage.svg';

// Asset Types
export interface AssetsType {
    logo: string;
    noBGLogo: string;
    marvelLogo: string;
    googlePlay: string;
    appStore: string;
    screenImage: string;
    profile: string;
}

export const assets: AssetsType = {
    logo,
    noBGLogo,
    marvelLogo,
    googlePlay,
    appStore,
    screenImage,
    profile
};

// Trailer Types
export interface TrailerType {
    image: string;
    videoUrl: string;
}

export const dummyTrailers: TrailerType[] = [
    {
        image: "https://img.youtube.com/vi/WpW36ldAqnM/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=WpW36ldAqnM'
    },
    {
        image: "https://img.youtube.com/vi/-sAOWhvheK8/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=-sAOWhvheK8'
    },
    {
        image: "https://img.youtube.com/vi/1pHDWnXmK7Y/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=1pHDWnXmK7Y'
    },
    {
        image: "https://img.youtube.com/vi/umiKiW4En9g/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=umiKiW4En9g'
    },
];

// Cast Types
export interface CastType {
    name: string;
    profile_path: string;
}

export const dummyCastsData: CastType[] = [
    { name: "Milla Jovovich", profile_path: "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg" },
    { name: "Dave Bautista", profile_path: "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg" },
    // ... rest of the casts
];

// Genre and Show Types
export interface Genre {
    id: number;
    name: string;
}

export interface ShowType {
    _id: string;
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    genres: Genre[];
    casts: CastType[];
    release_date: string;
    original_language: string;
    tagline: string;
    vote_average: number;
    vote_count: number;
    runtime: number;
}

export const dummyShowsData: ShowType[] = [
    {
        _id: "324544",
        id: 324544,
        title: "In the Lost Lands",
        overview: "...",
        poster_path: "...",
        backdrop_path: "...",
        genres: [],
        casts: dummyCastsData,
        release_date: "2025-02-27",
        original_language: "en",
        tagline: "...",
        vote_average: 6.4,
        vote_count: 15000,
        runtime: 102
    },
    // ... other shows
];

// ShowTime Types
export interface ShowTime {
    time: string;
    showId: string;
}

export type DummyDateTimeData = {
    [date: string]: ShowTime[];
};

export const dummyDateTimeData: DummyDateTimeData = {
    "2025-07-24": [
        { time: "2025-07-24T01:00:00.000Z", showId: "..." },
        // ...
    ],
    // ...
};

// Dashboard Types
export interface ActiveShow {
    _id: string;
    movie: ShowType;
    showDateTime: string;
    showPrice: number;
    occupiedSeats: Record<string, string>;
}

export interface DashboardData {
    totalBookings: number;
    totalRevenue: number;
    totalUser: number;
    activeShows: ActiveShow[];
}

export const dummyDashboardData: DashboardData = {
    totalBookings: 14,
    totalRevenue: 1517,
    totalUser: 5,
    activeShows: [
        {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
            occupiedSeats: {
                A1: "user_123",
                B1: "user_123"
            }
        },
        // ...
    ]
};

// Booking Types
export interface Booking {
    _id: string;
    user: { name: string };
    show: {
        _id: string;
        movie: ShowType;
        showDateTime: string;
        showPrice: number;
    };
    amount: number;
    bookedSeats: string[];
    isPaid: boolean;
}

export const dummyBookingData: Booking[] = [
    {
        _id: "68396334fb83252d82e17295",
        user: { name: "GreatStack" },
        show: {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59
        },
        amount: 98,
        bookedSeats: ["D1", "D2"],
        isPaid: false
    },
    // ...
];
