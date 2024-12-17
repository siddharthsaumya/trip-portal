import headerImage from '../assets/headerImage.jpg';
import { useState } from "react";
import '../Styles/DashboardPage.css';
import TripListBox from '../Components/TripListBox';
import tripData from '../Data.json';
import DashboardDetailPage from '../Components/DashboardDetailPage';

function DashboardPage() {
  const [selectedTripId, setSelectedTripId] = useState(0);

  const setTripId = (id) => {
    setSelectedTripId(id);
  };

  return (
    <div className="dashboardPage">
      {selectedTripId === 0 ? (
        <>
          <div className="filterSection">
            <div>Select Client</div>
            <div>Date Range</div>
            <div>Download</div>
            <div>Searchbar</div>
          </div>
          <div className="filterDisplaySection">
            <div className="filterDisplayList">Filter-1</div>
            <div className="filterDisplayList">Filter-2</div>
          </div>
          <div className="tripListSection">
            {tripData.trips?.map((trip) => (
              <TripListBox key={trip.id} tripData={trip} setTripId={setTripId} />
            ))}
          </div>
        </>
      ) : (
        <DashboardDetailPage selectedTripId={selectedTripId} />
      )}
    </div>
  );
}

export default DashboardPage;