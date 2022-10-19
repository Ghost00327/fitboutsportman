import {api} from "@/api";
import type {User} from "@/model";
import type {AxiosResponse} from "axios";

export class ActivityProvider {
    async refreshActivities(id: Number): Promise<AxiosResponse<any>> {
        return (await api.get<User[]>(`/api/private/refresh-activities/${id}`))
    }
}