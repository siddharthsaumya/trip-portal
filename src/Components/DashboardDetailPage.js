import headerImage from '../assets/headerImage.jpg';
import '../Styles/DashboardPageDetail.css';
import { useState } from "react";
import tripData from '../Data.json';
import left_icon from '../assets/left-icon.png';

function getTripById(id, data) {
  return data.trips.find(trip => trip.id === id);
}

function DashboardDetailPage(selectedTripId) {
  const [tripId, setTripId] = useState(selectedTripId.selectedTripId);
  const [data, setData] = useState(getTripById(tripId,tripData));

  console.log(data);

  return (
    <div className='detailPage'>
    <div className='headerContainer'>
        <img src={headerImage} className='headerImage' />
      
      <div className='headerDataContainer'>
        <div className='section-1'>
        <div className='section-1-1'>
          <div>Trip to {data.tripDestination.city}</div>
          <div className='city-nation'>{data.tripDestination.city}, {data.tripDestination.nation}</div>
        </div> 

        <div className='section-1-2'>
          <div className='section-1-2-element'>
            <div>Travelers:</div>
            <div className='name'>{data.userDetails.name}</div>
          </div>
          <div className='section-1-2-element'>
            <div>SID:</div>
            <div>{data.SID}</div>
          </div>
          <div className='section-1-2-element'>
            <div>PNR:</div>
            <div>{data.PNR}</div>
          </div>
          <div className='section-1-2-element'>
            <div>Start Date:</div>
            <div>{data.tripDates.startDate}</div>
          </div>
          <div className='section-1-2-element'>
            <div>End Date:</div>
            <div>{data.tripDates.endDate}</div>
          </div>
        </div>
        </div>

        <div className='section-2'>
          <div>Dates:</div>
          <div className='dateSelection'>
            <img  src={left_icon}/>
            <div>
              <span>22 Dec</span>
              <span>22 Dec</span>
              <span>22 Dec</span>
            </div>
            <img  src={left_icon}/>
          </div>
        </div>




      </div>
    


    </div>
    </div>
  );
}

export default DashboardDetailPage;
