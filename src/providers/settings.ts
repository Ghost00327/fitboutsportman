import {api} from "@/api";
import type {Settings} from "@/model";
import type {AxiosResponse} from "axios";

export class SettingsProvider {
    async get(): Promise<AxiosResponse<Settings>> {
        return (await api.get<Settings>( "/api/private/settings"))
    }

    async update(settings: Settings): Promise<AxiosResponse<Settings>> {
        return (await api.put<Settings>( `/api/private/settings/${settings.id}`, settings))
    }
}