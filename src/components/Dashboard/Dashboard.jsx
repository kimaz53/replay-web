import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const Dashboard = (props) => {
  const history = useHistory();

  const userPage = () => {
    history.push("/dashboard");
    window.location.reload(true);
  };
  const songsPage = () => {
    history.push("/songs");
    window.location.reload(true);
  };

  const albumsPage = () => {
    history.push("/albums");
    window.location.reload(true);
  };

  const playlistPage = () => {
    history.push("/playlist");
    window.location.reload(true);
  };

  const artistPage = () => {
    history.push("/artist");
    window.location.reload(true);
  };

  const [activeTab, setActiveTab] = useState("tab1");
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://replay-stream.000webhostapp.com/my_db/database.php")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="content-container">
        <div className="header-container">
          <div className="admin-container">Admin</div>
        </div>

        <div className="icon" />
        <div>
          <div className="search-bar"></div>
          <form onChange={(e) => setSearch(e.target.value)}>
            <input
              className="search-field-container"
              type="search"
              placeholder="Search a record"
              autoComplete="off"
            ></input>
          </form>
        </div>

        {/* <button
          className="proceed-button"
          onClick={() => console.log("Proceed")}
        >
          + Add
        </button> */}

        <div className="navigation-container">
          <div className="navigation-buttons">
            <button
              className={`tab-style ${activeTab === "tab1" ? "active" : ""}`}
              onClick={userPage}
            >
              Users{activeTab === "tab1" && <div className="indicator"></div>}
            </button>
            <button
              className={`tab-style ${activeTab === "tab2" ? "active" : ""}`}
              onClick={artistPage}
            >
              Artists{activeTab === "tab2" && <div className="indicator"></div>}
            </button>
            <button
              className={`tab-style ${activeTab === "tab3" ? "active" : ""}`}
              onClick={songsPage}
            >
              Songs{activeTab === "tab3" && <div className="indicator"></div>}
            </button>

            <button
              className={`tab-style ${activeTab === "tab5" ? "active" : ""}`}
              onClick={playlistPage}
            >
              Playlist
              {activeTab === "tab5" && <div className="indicator"></div>}
            </button>
          </div>
        </div>
        <div className="options-container">
          <button className="select-all-button">Select All</button>
          <button className="add-button">Add</button>
          <div className="db-content-container">
            <tr>
              <thead>
                <th style={{ paddingLeft: "80px" }}></th>
                <th style={{ paddingLeft: "80px" }}>User ID</th>
                <th style={{ paddingLeft: "80px" }}>Username</th>
                <th style={{ paddingLeft: "80px" }}>Birthdate</th>
                <th style={{ paddingLeft: "80px" }}>Gender</th>
                <th style={{ paddingLeft: "80px" }}>Email</th>
                <th style={{ paddingLeft: "80px" }}>Password</th>
                <th style={{ paddingLeft: "80px" }}>User Image</th>
                <th style={{ paddingLeft: "80px" }}>Full Name</th>
                <th style={{ paddingLeft: "80px", paddingRight: "80px" }}>
                  Location ID
                </th>
              </thead>
              <tbody className="scrollable">
                {data
                  .filter((item) => {
                    const searchLower = search.toLowerCase();
                    return (
                      item.userID.toLowerCase().includes(searchLower) ||
                      item.userName.toLowerCase().includes(searchLower) ||
                      item.birthDate.toLowerCase().includes(searchLower) ||
                      item.gender.toLowerCase().includes(searchLower) ||
                      item.firstName.toLowerCase().includes(searchLower) ||
                      item.pword.toLowerCase().includes(searchLower) ||
                      item.email.toLowerCase().includes(searchLower) ||
                      item.locationID.toLowerCase().includes(searchLower) ||
                      item.lastName.toLowerCase().includes(searchLower)
                    );
                  })
                  .map((item) => {
                    let fullName = item.firstName + " " + item.lastName;
                    return (
                      <tr key={item.userID}>
                        <td className="select-container">
                          <input
                            className="check-box"
                            type="checkbox"
                            onClick={() => console.log("Hola")}
                          />
                        </td>
                        <td style={{ paddingLeft: "80px" }}>{item.userID}</td>
                        <td style={{ paddingLeft: "80px" }}>{item.userName}</td>
                        <td style={{ paddingLeft: "80px" }}>
                          {item.birthDate}
                        </td>
                        <td style={{ paddingLeft: "80px" }}>{item.gender}</td>
                        <td style={{ paddingLeft: "80px" }}>{item.email}</td>
                        <td style={{ paddingLeft: "80px" }}>{item.pword}</td>
                        <td style={{ paddingLeft: "80px" }}>
                          {item.userImage}
                        </td>
                        <td style={{ paddingLeft: "80px" }}>{fullName}</td>
                        <td
                          style={{ paddingLeft: "80px", paddingRight: "80px" }}
                        >
                          {item.locationID}
                        </td>
                        <td className="user-types"></td>
                      </tr>
                    );
                  })}
              </tbody>
            </tr>
          </div>
        </div>
      </div>
    </>
  );
};

/*  {activeTab === "tab1" && <div>Content for Tab 1</div>}
    {activeTab === "tab2" && <div>Content for Tab 2</div>}
    {activeTab === "tab3" && <div>Content for Tab 3</div>}
    {activeTab === "tab4" && <div>Content for Tab 4</div>}
    {activeTab === "tab5" && <div>Content for Tab 5</div>} */
