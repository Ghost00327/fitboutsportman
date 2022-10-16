import {api} from "@/api";
import type {Athlete} from "@/model";
import type {AxiosResponse} from "axios";

export class AthleteProvider {
    async get(): Promise<AxiosResponse<Athlete>> {
        return (await api.get<Athlete>( "/api/private/profile"))
    }

    async getAll(): Promise<AxiosResponse<Athlete[]>> {
        return (await api.get<Athlete[]>( "/api/private/user"))
    }
}