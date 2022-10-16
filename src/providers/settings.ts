import {api} from "@/api";
import type {ActivityType, Settings} from "@/model";
import type {AxiosResponse} from "axios";

export class SettingsProvider {
    async get(): Promise<AxiosResponse<Settings>> {
        return (await api.get<Settings>( "/api/private/settings"))
    }

    async toggle(activityType: ActivityType): Promise<AxiosResponse<any>> {
        return (await api.post( `/api/private/settings/toggle-activity-type/${activityType.id}`))
    }
}