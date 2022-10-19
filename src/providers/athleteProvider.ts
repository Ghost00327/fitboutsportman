import {api} from "@/api";
import type {User} from "@/model";
import type {AxiosResponse} from "axios";

export class AthleteProvider {
    async get(): Promise<AxiosResponse<User>> {
        return (await api.get<User>( "/api/private/profile"))
    }

    async getAll(): Promise<AxiosResponse<User[]>> {
        return (await api.get<User[]>( "/api/private/users"))
    }

    async refreshActivities(id: Number): Promise<AxiosResponse<any>> {
        return (await api.post<User>(`/api/private/users/${id}/refresh-activities`))
    }
}