import {api} from "@/api";
import type {User, UserProfileSummary} from "@/model";
import type {AxiosResponse} from "axios";

export class AthleteProvider {
    async get(): Promise<AxiosResponse<User>> {
        return (await api.get<User>( "/api/private/profile"))
    }

    async getSummary(id: number | string): Promise<AxiosResponse<UserProfileSummary>> {
        return (await api.get<UserProfileSummary>( `/api/private/users/${id}/summary`))
    }

    async update(user: User): Promise<AxiosResponse<User>> {
        return (await api.put<User>( `/api/private/users/${user.id}`, {
            user: user
        }))
    }

    async getAll(): Promise<AxiosResponse<User[]>> {
        return (await api.get<User[]>( "/api/private/users"))
    }

    async refreshActivities(id: Number, integration_id: number): Promise<AxiosResponse<any>> {
        return (await api.post<User>(`/api/private/users/${id}/refresh-activities?integration_id=${integration_id}`))
    }
}