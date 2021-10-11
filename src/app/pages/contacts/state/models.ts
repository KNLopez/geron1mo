export interface Contact {
  id: string
  firstname: string
  lastname: string
  phone?: string
  email?: string
  status?: number
  created_at: Date | undefined
  assigned?: string
  campaign_id?: string
}
