import {useEffect, useState} from 'react'

const Contacts = () => {
  const [customers, setCustomers] = useState()
  const [customer, setCustomer] = useState<any>()

  const onSubmit = (e: any) => {
    e.preventDefault()
  }

  useEffect(() => {
    console.log('effect', customers)
  }, [customers])

  const handleChange = (e: any) => {
    const {name, value} = e.target
    setCustomer({...customer, [name]: value})
  }

  return <div className='content d-flex flex-column flex-column-fluid' id='kt_content'></div>
}

export default Contacts
