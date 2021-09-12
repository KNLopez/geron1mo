const customerData: IObjectKeys = {
  '1': {
    name: 'Emma Smith',
    phone: '888-888-8888',
    email: 'ema@gmail.com',
    studio: 'F45 Orange',
    status: 1,
    dateCreated: new Date(),
    assignee: 'Jover',
    campaigns: [1, 2, 3],
    value: '$200,000',
  },
}

interface IObjectKeys {
  [key: string]: any
}

export interface Customer {
  name: string
  phone: string
  email: string
  studio: string
  status: number
  dateCreated: Date
  assignee: string
  campaigns: number[]
  value: string
}

export default customerData
