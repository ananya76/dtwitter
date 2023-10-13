import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="ananya"
          options={{ height: 800 }}
        />

        <TwitterShareButton
          url={"https://twitter.com/Ananya233176594"}
          options={{ text: "#reactjs is awesome", via: "" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
