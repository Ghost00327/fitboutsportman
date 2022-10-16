import {api} from "@/api";
import type {Team, TeamSummary} from "@/model";
import type {AxiosResponse} from "axios";

export class Teams {
    async get(): Promise<AxiosResponse<Team[]>> {
        return (await api.get<Team[]>( "/api/public/team"))
    }

    async getSummary(): Promise<AxiosResponse<TeamSummary[]>> {
        return (await api.get<TeamSummary[]>( "/api/private/team/summary"))
    }

    async update(team: Team): Promise<AxiosResponse<Team>> {
        return await api.put<Team>(`/api/private/team/${team.id}`, team)
    }

    async create(team: Team): Promise<AxiosResponse<Team>> {
        return await api.post<Team>("/api/private/team", team)
    }

    async delete(team: Team): Promise<AxiosResponse<Team>> {
        return await api.delete<Team>(`/api/private/team/${team.id}`)
    }
}