import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import { useHistory } from "react-router-dom";

export const Artist = (props) => {
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

  const [activeTab, setActiveTab] = useState("tab2");
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://replay-stream.000webhostapp.com/my_db/artist.php")
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
                <tr>
                  <th style={{ paddingLeft: "80px" }}></th>
                  <th style={{ paddingLeft: "80px" }}>Artist Image</th>
                  <th style={{ paddingLeft: "270px" }}>Artitst ID</th>
                  <th style={{ paddingLeft: "270px" }}>Artist Name</th>
                  <th style={{ paddingLeft: "270px" }}>Artist Cover</th>
                  <th style={{ paddingLeft: "270px" }}>User ID</th>
                </tr>
              </thead>
              <tbody>
                {data
                  .filter((item) => {
                    const searchLower = search.toLowerCase();
                    return (
                      item.artistImage.toLowerCase().includes(searchLower) ||
                      item.artistID.toLowerCase().includes(searchLower) ||
                      item.artistName.toLowerCase().includes(searchLower) ||
                      item.artistCover.toLowerCase().includes(searchLower) ||
                      item.userID.toLowerCase().includes(searchLower)
                    );
                  })
                  .map((item) => (
                    <tr key={item.artistID}>
                      <td style={{ paddingLeft: "80px" }}>
                        <input className="check-box-artist" type="checkbox" />
                      </td>
                      <td style={{ paddingLeft: "80px" }}>
                        {item.artistImage}
                      </td>
                      <td style={{ paddingLeft: "270px" }}>{item.artistID}</td>
                      <td style={{ paddingLeft: "270px" }}>{item.artistName}</td>
                      <td style={{ paddingLeft: "270px" }}>
                        {item.artistCover}
                      </td>
                      <td style={{ paddingLeft: "270px" }}>{item.userID}</td>

                      <td className="user-types"></td>
                    </tr>
                  ))}
              </tbody>
            </tr>
          </div>
        </div>
      </div>
    </>
  );
};
