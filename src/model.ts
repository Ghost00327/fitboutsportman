export interface LeaderboardRow {
    user: User
    activities_count: Number,
    badges: Badge[],
    calories_expended: Number,
    elapsed_millis: number,
    points: Number,
    distance: Number,
    points_sum: Number
}

export interface Badge {
    id: number
    name: string
    description: string
    min_points: number
    emoji: string
}

export interface Team {
    id: number,
    name: string,
    active: boolean,
    emoji: string
}

export interface User {
    id: Number,
    email: string,
    city: string,
    lastname: string,
    firstname: string,
    profile_photo_url: string,
    team: Team
}

export interface UserSummary {
    lastname: string,
    firstname: string,
    profile_photo_url: string,
    points: number
}

export interface TeamSummary {
    team: Team,
    users: UserSummary[]
}

export interface ActivityType {
    id: number,
    active: boolean
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

export interface Integration {
    id: number
    type: string
    scopes: string[]
    external_id: string
}

export interface AvailableIntegration {
    name: string
    type: string
    description: string
    logo_url: string
}