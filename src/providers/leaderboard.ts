import {api} from "@/api";
import type {LeaderboardRow} from "@/model";
import type {AxiosResponse} from "axios";

export class Leaderboard {
    async get(): Promise<AxiosResponse<LeaderboardRow[]>> {
        return (await api.get<LeaderboardRow[]>( "/api/private/leaderboard"))
    }
}