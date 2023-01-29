import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import { useHistory } from "react-router-dom";

export const Songs = (props) => {
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

  const [activeTab, setActiveTab] = useState("tab3");
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const desc = useState();

  useEffect(() => {
    axios
      .get("https://replay-stream.000webhostapp.com/my_db/songs.php")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const unlisten = history.listen((location, action) => {
      console.log(action, location.pathname, location.state);
      window.location.reload(true);
    });
    return () => {
      unlisten();
    };
  }, [history]);

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
                <tr style={{ paddingLeft: "80px" }}>
                  <th style={{ paddingLeft: "80px" }}></th>
                  <th style={{ paddingLeft: "80px" }}>Song ID</th>
                  <th style={{ paddingLeft: "80px" }}>Title</th>
                  <th style={{ paddingLeft: "80px" }}>BPM</th>

                  <th style={{ paddingLeft: "80px" }}>Duration</th>
                  <th style={{ paddingLeft: "80px" }}>Description</th>
                  <th style={{ paddingLeft: "80px" }}>Visibility</th>
                  <th style={{ paddingLeft: "80px" }}>Is Explicit</th>
                  <th style={{ paddingLeft: "80px" }}>Song Type</th>
                  <th style={{ paddingLeft: "80px" }}>Audio File</th>
                  <th style={{ paddingLeft: "80px" }}>Song Key ID</th>
                  <th style={{ paddingLeft: "80px", paddingRight: "80px" }}>
                    Genre ID
                  </th>
                </tr>
              </thead>
              <tbody>
                {data
                  .filter((item) => {
                    const searchLower = search.toLowerCase();
                    return (
                      item.songID.toLowerCase().includes(searchLower) ||
                      item.title.toLowerCase().includes(searchLower) ||
                      item.bpm.toLowerCase().includes(searchLower) ||
                      item.duration.toLowerCase().includes(searchLower) ||
                      item.description.toLowerCase().includes(searchLower) ||
                      item.visibility.toLowerCase().includes(searchLower) ||
                      item.isExplicit.toLowerCase().includes(searchLower) ||
                      item.songType.toLowerCase().includes(searchLower) ||
                      item.audioFile.toLowerCase().includes(searchLower) ||
                      item.songKeyID.toLowerCase().includes(searchLower) ||
                      item.genreID.toLowerCase().includes(searchLower) 
                    );
                  })
                  .map((item) => {
                    let descript = item.description;
                    if (descript === null) {
                      item.description = "None";
                    }
                    return (
                      <tr key={item.songID}>
                        <td style={{ paddingLeft: "80px" }}>
                          <input className="check-box-artist" type="checkbox" />
                        </td>
                        <td style={{ paddingLeft: "80px" }}>{item.songID}</td>
                        <td style={{ paddingLeft: "80px" }}>{item.title}</td>
                        <td style={{ paddingLeft: "80px" }}> {item.bpm}</td>

                        <td style={{ paddingLeft: "80px" }}>{item.duration}</td>
                        <td style={{ paddingLeft: "80px" }}>
                          {item.description}
                        </td>

                        <td style={{ paddingLeft: "80px" }}>
                          {item.visibility}
                        </td>
                        <td style={{ paddingLeft: "80px" }}>
                          {item.isExplicit}
                        </td>
                        <td style={{ paddingLeft: "80px" }}>{item.songType}</td>
                        <td style={{ paddingLeft: "80px" }}>
                          {item.audioFile}
                        </td>
                        <td style={{ paddingLeft: "80px" }}>
                          {item.songKeyID}
                        </td>
                        <td
                          style={{ paddingLeft: "80px", paddingRight: "80px" }}
                        >
                          {item.genreID}
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
