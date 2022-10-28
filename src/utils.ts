import type {User, Team} from "@/model"

export function fullAthleteName(athlete: User): string {
    return `${athlete.firstname} ${athlete.lastname}`
}

export function fullTeamName(team: Team): string {
    return `${team.emoji ?? ""} ${team.name}`
}