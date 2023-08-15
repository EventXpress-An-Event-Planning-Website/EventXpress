// import React from 'react'
import SPSidebar from "../SPSidebar";
import { Link } from "react-router-dom";

const PrefpreList = ({ rows }) => {
  return (
    <div className="predefined_pack_container">
      <div>
        <SPSidebar />
      </div>
      <div className="prefContainer">
        <div className="title_container">
          <h1>CREATE A PREDEFINED PACKAGE</h1>
          <p>Select prefered Service Providers to create a package</p>
        </div>

        <div className="predefined_preference_list">
          <div className="top_pref">
            <div className="venue_preference">
              <h3>Venue</h3>
              <table className="prefTable">
                <tbody className="allPrefSPList">
                  {rows.map((row, idx) => {
                    // capitalize the status first letter
                    // const statusText = row.status.charAt(0).toUppserCase() + row.status.slice(1);
                    return (
                      <tr key={idx}>
                        {/* <td>{row.busName} - {row.busAddress}</td> */}
                        <td>
                          <Link to={`/ServiceProvider/typePack`}>
                            {row.busName} - {row.busAddress}
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="catering_preference">
              <h3>Catering</h3>
              <table className="prefTable">
                <tbody className="allPrefSPList">
                  {rows.map((row, idx) => {
                    return (
                      <tr key={idx}>
                        <td>
                          {row.busName} - {row.busAddress}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="cake_preference">
              <h3>Cake</h3>
              <table className="prefTable">
                <tbody className="allPrefSPList">
                  {rows.map((row, idx) => {
                    return (
                      <tr key={idx}>
                        <td>
                          {row.busName} - {row.busAddress}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bottom_pref">
            <div className="photography_preference">
              <h3>Photography</h3>
              <table className="prefTable">
                <tbody className="allPrefSPList">
                  {rows.map((row, idx) => {
                    return (
                      <tr key={idx}>
                        <td>
                          {row.busName} - {row.busAddress}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="decoration_preference">
              <h3>Decoration</h3>
              <table className="prefTable">
                <tbody className="allPrefSPList">
                  {rows.map((row, idx) => {
                    return (
                      <tr key={idx}>
                        <td>
                          {row.busName} - {row.busAddress}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="lightsandsounds_preference">
              <h3>Lights and Sounds</h3>
              <table className="prefTable">
                <tbody className="allPrefSPList">
                  {rows.map((row, idx) => {
                    return (
                      <tr key={idx}>
                        <td>
                          {row.busName} - {row.busAddress}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrefpreList;
