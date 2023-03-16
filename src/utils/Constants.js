export const API_KEY = "AIzaSyB3sRtuNSB08c6N3hnSlUy4T8ql7sz3iRk"

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;

  export const CHANNEL_INFO_API = "https://youtube.googleapis.com/youtube/v3/channels?";

  // part=snippet%2CcontentDetails%2Cstatistics&id=UC0zXnLIFedO97pFsyMxZcFg&key=AIzaSyB3sRtuNSB08c6N3hnSlUy4T8ql7sz3iRk

  export const SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

  export const YOUTUBE_SEARCHED_VIDEO_API =
  "https://corsanywhere.herokuapp.com/https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&regionCode=IN&type=video&key=" +
  API_KEY +
  "&q=";

  export function timeAgo(value) {
    const seconds = Math.floor(
      (new Date().getTime() - new Date(value).getTime()) / 1000
    );
    let interval = seconds / 31536000;
    const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
    if (interval > 1) {
      return rtf.format(-Math.floor(interval), "year");
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return rtf.format(-Math.floor(interval), "month");
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return rtf.format(-Math.floor(interval), "day");
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return rtf.format(-Math.floor(interval), "hour");
    }
    interval = seconds / 60;
    if (interval > 1) {
      return rtf.format(-Math.floor(interval), "minute");
    }
    return rtf.format(-Math.floor(interval), "second");
  }