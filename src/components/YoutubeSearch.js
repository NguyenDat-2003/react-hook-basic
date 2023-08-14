import axios from "axios";
import { useState, useEffect } from "react";
import moment from "moment";

import useFetch from "../hook/fetch";
function YoutubeSearch() {
  const [videos, setVideo] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {}, []);

  const handleSearchYT = async () => {
    // let res = await axios.get("https://www.googleapis.com/youtube/v3/search", {
    //   part: "snippet",
    //   maxResults: "10",
    //   key: "AIzaSyC8zM5zEmiNwSCIhQFWRiqAfbLgw4CO5oA",
    //   type: "video",
    //   q: query,
    // });

    let res = await axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: "20",
        key: "AIzaSyC8zM5zEmiNwSCIhQFWRiqAfbLgw4CO5oA",
        type: "video",
        q: query,
      },
    });

    if (res && res.data) {
      let raw = res.data.items;
      let result = [];
      if (raw && raw.length > 0) {
        raw.map((item) => {
          let obj = {};
          obj.id = item.id.videoId;
          obj.title = item.snippet.title;
          obj.createdAt = item.snippet.publishedAt;
          obj.author = item.snippet.channelTitle;
          obj.desc = item.snippet.description;

          result.push(obj);
        });
      }
      setVideo(result);
    }
  };

  return (
    <div className="youtubesearch-container">
      <div className="yt-search">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearchYT}>Search</button>
      </div>
      {videos &&
        videos.length > 0 &&
        videos.map((item) => {
          return (
            <div className="yt-result" key={item.id}>
              <div className="left">
                <iframe
                  className="if-yt"
                  src={`https://www.youtube.com/embed/${item.id}`}
                  title="Tại sao con trai bây giờ lại nữ tính như vậy?"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="right">
                <div className="title">{item.title}</div>
                <div className="created-at">
                  Created At:
                  {moment(item.createdAt).format("DD-MM-YY HH:mm:ss A")}
                </div>
                <div className="author">Author : {item.author}</div>
                <div className="desc">{item.desc}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default YoutubeSearch;

// {
//   "kind": "youtube#searchListResponse",
//   "etag": "sARTWBMdlQ7O3tYVSkPCODmnDWY",
//   "nextPageToken": "CAUQAA",
//   "regionCode": "VN",
//   "pageInfo": {
//     "totalResults": 879,
//     "resultsPerPage": 5
//   },
//   "items": [
//     {
//       "kind": "youtube#searchResult",
//       "etag": "kUt3IIbkaVY6dp8Xtybs_hTKoF0",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "XIGx1sfvRoc"
//       },
//       "snippet": {
//         "publishedAt": "2023-08-08T12:45:08Z",
//         "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//         "title": "[FULL] Khóa Học Next.JS 13 Siêu Cơ Bản Dành Cho Beginners | Học React với Hỏi Dân IT",
//         "description": "Next.js 13 (App routers) sẽ được cover các kiến thức cơ bản nhất trong khóa học này. Bạn nào muốn donate hay mua cho mình ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/XIGx1sfvRoc/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/XIGx1sfvRoc/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/XIGx1sfvRoc/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "Hỏi Dân IT",
//         "liveBroadcastContent": "none",
//         "publishTime": "2023-08-08T12:45:08Z"
//       }
//     },
//     {
//       "kind": "youtube#searchResult",
//       "etag": "6GZbREsdXoZuejdHEtBW3j7tS_Y",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "1kSY7cCo7Q0"
//       },
//       "snippet": {
//         "publishedAt": "2023-04-23T10:00:10Z",
//         "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//         "title": "Tương Lai Của Dev React.JS | Nên Học Gì Để Không Thất Nghiệp Khi React Thay Đổi ?",
//         "description": "Vào tháng 3, 2023, React chính thức có ngôi nhà mới với địa chỉ https://react.dev, nhà cũ reactjs.org đã được đổi thành ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/1kSY7cCo7Q0/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/1kSY7cCo7Q0/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/1kSY7cCo7Q0/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "Hỏi Dân IT",
//         "liveBroadcastContent": "none",
//         "publishTime": "2023-04-23T10:00:10Z"
//       }
//     },
//     {
//       "kind": "youtube#searchResult",
//       "etag": "f6gIm5BIjWWYTX5dIZlLlkIEFBA",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "jUOwicA-IQ0"
//       },
//       "snippet": {
//         "publishedAt": "2022-08-17T11:15:14Z",
//         "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//         "title": "Giới Thiệu Khóa Học React Pro Max - Những Kiến Thức Fresher React Sẽ Phải Biết",
//         "description": "Link Khóa Học Này trên Udemy: https://www.udemy.com/course/hoidanit-react-basic-ultimate Tất cả khóa học của Hỏi Dân IT: ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/jUOwicA-IQ0/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/jUOwicA-IQ0/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/jUOwicA-IQ0/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "Hỏi Dân IT",
//         "liveBroadcastContent": "none",
//         "publishTime": "2022-08-17T11:15:14Z"
//       }
//     },
//     {
//       "kind": "youtube#searchResult",
//       "etag": "b4OBGqMMZqiuKsF2Sz1cQpXL8N4",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "FQvgGl1Qr8c"
//       },
//       "snippet": {
//         "publishedAt": "2023-04-25T05:00:08Z",
//         "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//         "title": "React Dev Sẽ Cần Thay Đổi ? 1m2 20 Dev React.Js",
//         "description": "Với trang tài liệu mới react.dev, react đã định hướng là công cụ dùng ở client lẫn server (hybrid apps). Vì vậy, react dev sẽ cần ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/FQvgGl1Qr8c/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/FQvgGl1Qr8c/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/FQvgGl1Qr8c/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "Hỏi Dân IT",
//         "liveBroadcastContent": "none",
//         "publishTime": "2023-04-25T05:00:08Z"
//       }
//     },
//     {
//       "kind": "youtube#searchResult",
//       "etag": "mIt18O-Xxmc5A5jRZcWBf9u85ig",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "FbwJ8Q0Nq3g"
//       },
//       "snippet": {
//         "publishedAt": "2023-08-13T12:40:07Z",
//         "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//         "title": "#24. Display List Blog | Next.JS Cơ Bản Cho Beginners với React và Typescript",
//         "description": "Trong video này, chúng ta sẽ cùng nhau đi tìm hiểu về Display List Blog với Next.js Bạn nào muốn donate hay mua cho mình ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/FbwJ8Q0Nq3g/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/FbwJ8Q0Nq3g/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/FbwJ8Q0Nq3g/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "Hỏi Dân IT",
//         "liveBroadcastContent": "none",
//         "publishTime": "2023-08-13T12:40:07Z"
//       }
//     }
//   ]
// }
