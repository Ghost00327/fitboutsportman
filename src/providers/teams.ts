import {api} from "@/api";
import type {Team} from "@/model";
import type {AxiosResponse} from "axios";

export class Teams {
    async get(): Promise<AxiosResponse<Team[]>> {
        return (await api.get<Team[]>( "/api/public/teams"))
    }
}