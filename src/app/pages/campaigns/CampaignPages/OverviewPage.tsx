import {ChartsWidget3} from '../../../../_metronic/partials/widgets'
import AMOUNT_SPENT_OPTIONS from '../charts/ChartOptions/AmountSpent'
import LEADS_OPTIONS from '../charts/ChartOptions/Leads'
import WON_OPTIONS from '../charts/ChartOptions/Won'

const OverviewPage = () => {
  return (
    <>
      <div className='row g-4 mb-4'>
        <ChartsWidget3
          className='leads  col-4 col-sm-4 col-xl'
          title='Leads'
          options={LEADS_OPTIONS}
        />
        <ChartsWidget3
          className='amount  col-4 col-sm-4 col-xl'
          title='Amount Spent'
          options={AMOUNT_SPENT_OPTIONS}
        />
        <ChartsWidget3 className='won  col-4 col-sm-4 col-xl' title='Won' options={WON_OPTIONS} />
      </div>
      <div className='row g-4'>
        <ChartsWidget3 className='won' title='CPL' options={WON_OPTIONS} />
      </div>
    </>
  )
}

export default OverviewPage
