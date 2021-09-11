import React, {useContext} from 'react'
import { LinksContext } from '../context/links'
import { AuthContext } from '../context/auth'

import Link from './Link'

const LinksDashboard = ({history}) => {

  const {links} = useContext(LinksContext)
  const {loading} = useContext(AuthContext)
  // Work on load the links for the specific user, and not the inital state
  return (
    <>
          {loading ? 
            <div className='container'>
              <h1>Loading ...</h1>
            </div>:     
            <div className='container links-container main'>
              {links.map( link => <Link 
                key={link.id}
                link={link}
                boxNumber={(links.indexOf(link)) + 1}
                history={history}
              />)}
            </div>
          }
    </>
    )
}

export default LinksDashboard

{/* <a className='box box-1' href={`https://fclm-portal.amazon.com/ppa/inspect/process?&warehouseId=DJZ5`} target='_blank' rel="noreferrer">FCLM</a>
<a className='box box-2' href='https://logistics.amazon.com/station/dashboard/MainBoard' target='_blank' rel="noreferrer">Station Command</a>
<a className='box box-3' href='https://scheduling.amazon.com/#/instant-vto?siteId=DJZ5' target='_blank' rel="noreferrer">VTO</a>
<a className='box box-4' href='https://trans-logistics.amazon.com/sortcenter/rms/resourcemanagement/?setNodeId=DJZ5' target='_blank' rel="noreferrer">QR Generator</a>
<a className='box box-5' href='https://area-readiness-iad.amazon.com/apps/4MCheck/index.html#/checklist-select?data=%7B%22warehouseId%22:%22DJZ5%22%7D' target='_blank' rel="noreferrer">Area Readiness</a>
<a className='box box-6' href='https://logistics.amazon.com/station/inductperformance/view?isDwellingTab=true' target='_blank' rel="noreferrer">Dwelling</a>
<a className='box box-7' href='https://apollo-audit.corp.amazon.com' target='_blank' rel="noreferrer">Apollo</a>
<a className='box box-8' href='https://atlas.corp.amazon.com/en_US/action_center/DEW2/actions/?status=open,pending,workInProgress' target='_blank' rel="noreferrer">Atlas</a>
<a className='box box-9' href='http://fcmenu-iad-regionalized.corp.amazon.com/DJZ5/laborTrackingKiosk' target='_blank' rel="noreferrer">Labor Track</a>
<a className='box box-10' href='https://www.amazonlogistics.com/' target='_blank' rel="noreferrer">Amazon Logistics</a>
<a className='box box-11' href='https://na.route.planning.last-mile.a2z.com/route-planning/DJZ5/dfc3989b-67cf-4005-ad2d-4049f56ba9e8/' target='_blank' rel="noreferrer">Routes Planning</a>
<a className='box box-12' href='https://na.route.planning.last-mile.a2z.com/route-planning/DJZ5/dfc3989b-67cf-4005-ad2d-4049f56ba9e8/' target='_blank' rel="noreferrer">Perfect Mile</a>
<a className='box box-13' href='https://route-stager-na.corp.amazon.com/index.html#/nodeV2/DJZ5' target='_blank' rel="noreferrer">Routes Staging</a> */}
