import {api} from "@/api";
import type {AvailableIntegration, Integration} from "@/model";
import type {AxiosResponse} from "axios";

export class IntegrationProvider {
    async get(): Promise<AxiosResponse<Integration[]>> {
        return (await api.get<Integration[]>( "/api/private/integrations"))
    }

    async getAvailable(): Promise<AxiosResponse<AvailableIntegration[]>> {
        return (await api.get<AvailableIntegration[]>( "/api/private/integrations/available"))
    }

    async delete(integration: Integration): Promise<AxiosResponse<Integration>> {
        return await api.delete<Integration>(`/api/private/integrations/${integration.type}`)
    }
}