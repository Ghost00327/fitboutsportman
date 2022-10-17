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

export interface Badge {
    id: number
    name: string
    description: string
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

export interface ActivityType {
    id: number,
    strava_name: string,
    readable_name: string,
    formula: string,
    points_per_minute: string,
    points_per_km: string,
    points_per_100calories: string,
}

export interface Settings {
    id: number
    start_date: string //YYYY-MM-DD
    end_date: string // YYYY-MM-DD
    activity_types: ActivityType[]
    badges: Badge[]
}