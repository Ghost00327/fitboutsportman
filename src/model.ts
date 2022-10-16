export interface LeaderboardRow {
    athlete: Athlete
    activities_count: Number,
    badges: Badge[],
    calories_burned: Number,
    elapsed_seconds: number,
    points: Number,
    distance: Number,
    points_sum: Number
}

interface Badge {
    name: string
    min_points: number
}

export interface Team {
    id: number,
    name: string,
    active: boolean,
    emoji: string
}

export interface Athlete {
    id: Number,
    email: string,
    city: string,
    lastname: string,
    firstname: string,
    profile_photo_url: string,
    team: Team
}

export interface AthleteSummary {
    lastname: string,
    firstname: string,
    profile_photo_url: string,
    points: number
}

export interface TeamSummary {
    team: Team,
    athletes: AthleteSummary[]
}