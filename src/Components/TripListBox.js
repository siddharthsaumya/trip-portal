import '../Styles/TripListBox.css';
import { useState } from "react";
import paris_image from '../assets/paris.png';
import plane_icon from '../assets/plane_icon.svg';
import car_icon from '../assets/car_icon.svg';
import rail_icon from '../assets/rail_icon.svg';
import hotel_icon from '../assets/hotel_icon.svg';
import plane_departure from '../assets/plane_departure_icon.svg';
import plane_arrival from '../assets/plane_arrival_icon.svg';


function TripListBox({ tripData, setTripId }) {
  const [Data, setData] = useState(tripData);

  function convertTo24HourFormat(dateTime) {
    const [date, time, period] = dateTime.split(' ');
    let [hours, minutes] = time.split(':');
    hours = parseInt(hours);
    if (period === 'PM' && hours !== 12) {
      hours += 12;
    } else if (period === 'AM' && hours === 12) {
      hours = 0;
    }
    return `${String(hours).padStart(2, '0')}:${minutes}`;
  }

  return (
    <div className="trip-card" onClick={() => setTripId(Data.id)}>
      <div className="section1 tripSection">
        <img src={paris_image} alt="City" className="city-image" />
        <div className="trip-header-detail">
          <div className="trip-title">Trip to {Data.tripDestination.city}</div>
          <div className="trip-destination">{Data.tripDestination.city}, {Data.tripDestination.nation}</div>
          <div className="trip-icons">
            {Object.keys(Data.carBooking).length > 0 && <img src={car_icon} alt="Car" className="icon" />}
            {Object.keys(Data.flightBooking).length > 0 && <img src={plane_icon} alt="Plane" className="icon" />}
            {Object.keys(Data.hotelBooking).length > 0 && <img src={hotel_icon} alt="Hotel" className="icon" />}
            {Object.keys(Data.railBooking).length > 0 && <img src={rail_icon} alt="Train" className="icon" />}
          </div>
        </div>
      </div>

<div
  className="section2 tripSection"
  style={Object.keys(Data.flightBooking).length < 1 ? { visibility: 'hidden' } : {}}
>
  <div className="trip-flight">
    <div className='part1 partition'>
      <img src={plane_departure} alt="Plane" className="icon" />
      <div className="flight-detail">
        {Data.flightBooking.departure && Data.flightBooking.departure.departureCityShortcode 
          ? Data.flightBooking.departure.departureCityShortcode 
          : 'NULLDATA'}
      </div>
    </div>

    <div className='part2 partition'>
      <span className="flight-time">
        {Data.flightBooking.departure && Data.flightBooking.departure.departureDateTime
          ? convertTo24HourFormat(Data.flightBooking.departure.departureDateTime)
          : 'NULLDATA'}
      </span>
      &nbsp; to &nbsp;
      <span className="flight-time">
        {Data.flightBooking.arrival && Data.flightBooking.arrival.arrivalDateTime
          ? convertTo24HourFormat(Data.flightBooking.arrival.arrivalDateTime)
          : 'NULLDATA'}
      </span>
      <br/>
      <span className="flight-code">
        {Data.flightBooking.flightNumber ? Data.flightBooking.flightNumber : 'NULLDATA'}
      </span>
    </div>

    <div className='part3 partition'>
      <img src={plane_arrival} alt="Plane" className="icon" />
      <div className="flight-detail">
        {Data.flightBooking.arrival && Data.flightBooking.arrival.arrivalCityShortcode 
          ? Data.flightBooking.arrival.arrivalCityShortcode 
          : 'NULLDATA'}
      </div>
    </div>
  </div>
</div>


    <div className='section3 tripSection'>
        <div class="trip-info">
            <span>PNR:</span>
            &nbsp;&nbsp;
            <span class="highlight">{Data.PNR}</span>
        </div>
        <div class="trip-info">
            <span>SID:</span>
            &nbsp;&nbsp;
            <span class="highlight">{Data.SID}</span>
        </div>
    </div>

    <div className='section4 tripSection'>
        <div class="trip-info">
            <span>Traveler:</span>
            &nbsp;&nbsp;
            <span class="highlight">{Data.userDetails.name}</span>
        </div>
        <div class="trip-info">
            <span>Start Date:</span>
            &nbsp;&nbsp;
            <span class="highlight">{Data.tripDates.startDate}</span>
        </div>
    </div>
</div>
  );
}

export default TripListBox;
