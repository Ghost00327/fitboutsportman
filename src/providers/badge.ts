import {api} from "@/api";
import type {Badge} from "@/model";
import type {AxiosResponse} from "axios";

export class BadgeProvider {
    async getAll(): Promise<AxiosResponse<Badge[]>> {
        return (await api.get<Badge[]>( "/api/private/badges"))
    }

    async delete(badge: Badge): Promise<AxiosResponse<any>> {
        return (await api.delete( `/api/private/badges/${badge.id}`))
    }

    async update(badge: Badge): Promise<AxiosResponse<Badge>> {
        return (await api.put( `/api/private/badges/${badge.id}`, {
            badge: badge
        }))
    }

    async create(badge: Badge): Promise<AxiosResponse<Badge>> {
        return (await api.post( `/api/private/badges`, {
            badge: badge
        }))
    }
}