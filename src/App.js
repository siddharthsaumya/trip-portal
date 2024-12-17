import './App.css';
import { useState } from "react";
import dashboard_icon from './assets/dashboard.png';
import pinpoint_icon from './assets/location.png';
import travelers_icon from './assets/user.png';
import cross_icon from './assets/cross.png';
import DashboardPage from './Pages/DashboardPage';

function App() {

const [selectedSection, setSelectedSection] = useState(1);

  return (
    <div className="layout">
      <section className="section first-section">
      <img src={cross_icon} />
      Traveler Tracking Portal
      </section>
      <section className="section second-section">
        <div className="left-pane">
<div
            onClick={() => {selectedSection == 1 ? window.location.reload() : setSelectedSection(1)}}
            className={selectedSection === 1 ? 'selectedSection' : 'notSelectedSection'}
          >
          <img src={dashboard_icon}></img>
            Trips Dashboard
          </div>
          <div
            onClick={() => setSelectedSection(2)}
            className={selectedSection === 2 ? 'selectedSection' : 'notSelectedSection'}
          >
          <img src={pinpoint_icon}></img>
            PinPoint
          </div>
          <div
            onClick={() => setSelectedSection(3)}
            className={selectedSection === 3 ? 'selectedSection' : 'notSelectedSection'}
          >
          <img src={travelers_icon}></img>
            Travelers
          </div>
        </div>
        <div className="right-pane">

        {selectedSection === 1 ?
        
        <DashboardPage/>
        
        : selectedSection === 2 ? 'Pin Point' : 'Travelers'}
        
        
        </div>
      </section>
      <section className="section third-section">Third Section</section>
    </div>
  );
}

export default App;
