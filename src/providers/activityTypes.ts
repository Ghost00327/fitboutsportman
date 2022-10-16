import {api} from "@/api";
import type {ActivityType} from "@/model";
import type {AxiosResponse} from "axios";

export class ActivityTypes {
    async get(): Promise<AxiosResponse<ActivityType[]>> {
        return (await api.get<ActivityType[]>( "/api/private/settings/activity-types"))
    }

    async update(activityType: ActivityType): Promise<AxiosResponse<ActivityType>> {
        return await api.put<ActivityType>(`/api/private/team/${activityType.id}`, activityType)
    }
}