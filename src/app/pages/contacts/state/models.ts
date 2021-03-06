export interface Contact {
  id: string
  firstname: string
  lastname: string
  phone?: string
  email?: string
  status: string
  created_at: Date | undefined
  assigned: string
  campaign_id: string
}
