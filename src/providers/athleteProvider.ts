import {api} from "@/api";
import type {User} from "@/model";
import type {AxiosResponse} from "axios";

export class AthleteProvider {
    async get(): Promise<AxiosResponse<User>> {
        return (await api.get<User>( "/api/private/profile"))
    }

    async update(user: User): Promise<AxiosResponse<User>> {
        return (await api.put<User>( `/api/private/users/${user.id}`, {
            user: user
        }))
    }

    async getAll(): Promise<AxiosResponse<User[]>> {
        return (await api.get<User[]>( "/api/private/users"))
    }

    async refreshActivities(id: Number, integration: string): Promise<AxiosResponse<any>> {
        return (await api.post<User>(`/api/private/users/${id}/refresh-activities?integration=${integration}`))
    }
}