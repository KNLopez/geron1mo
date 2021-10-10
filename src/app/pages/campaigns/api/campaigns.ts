import axios from 'axios'
import {Campaign} from '../state/models'

export const CAMPAIGNS = `/campaigns`

export function getCampaignsApi() {
  return axios.get(CAMPAIGNS)
}

export function getCampaignLeads(id: string) {
  return axios.get(`${CAMPAIGNS}/${id}/leads`)
}

export function getCampaignApi(id: string) {
  return axios.get(`${CAMPAIGNS}/${id}`)
}

export function updateCampaignApi(campaign: Campaign) {
  return axios.put(`${CAMPAIGNS}/${campaign.id}`, campaign)
}

//singular contact
export function createCampaignApi(campaign: Campaign) {
  return axios.post(CAMPAIGNS, campaign)
}
