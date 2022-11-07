import {api} from "@/api";
import type {Integration, IntegrationCandidate} from "@/model";
import type {AxiosResponse} from "axios";

export class IntegrationProvider {
    async get(): Promise<AxiosResponse<Integration[]>> {
        return (await api.get<Integration[]>( "/api/private/integrations"))
    }

    async getIntegrationCandidates(): Promise<AxiosResponse<IntegrationCandidate[]>> {
        return (await api.get<IntegrationCandidate[]>( "/api/private/integrations/candidates"))
    }

    async delete(integration: Integration): Promise<AxiosResponse<Integration>> {
        return await api.delete<Integration>(`/api/private/integrations/${integration.id}`)
    }
}