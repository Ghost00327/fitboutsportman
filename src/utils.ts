import type {Athlete, Team} from "@/model"

export function fullAthleteName(athlete: Athlete | null): string {
    if (athlete === null) return ""
    return (athlete?.firstname ?? "").concat(athlete?.lastname ?? "")
}

export function fullTeamName(team: Team): string {
    return (team?.emoji ?? "").concat(team?.name ?? "")
}