const cameras = [
  {
    id: 98239,
    enabled: true,
    name: "camera-outdoor",
    address: "10.10.10.10",
    brand: "html",
    type: "camera",
    model: "rtsp",
    auth: {
      username: "admin",
      password: "admin",
    },
    streamLink: "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
    streams: [{ format: "h264" }],
    rights: [{ group: "administrators", surveillance: true, archive: true }],
    sound: true,
    narrowBandwidth: true,
    archive: {
      recAndArch: true,
      recMode: "alwayson",
    },
    motionDetector: false,
    analytics: {
      0: false,
      1: true,
      2: false,
    },
  },
  {
    id: 5465,
    name: "camera-indoou",
    enabled: true,
    address: "10.10.140.10",
    brand: "rtsp",
    type: "camera",
    model: "rtsp",
    auth: {
      username: "user",
      password: "admin",
    },
    streamLink: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
    streams: [{ format: "h265" }],
    rights: [{ group: "administrators", surveillance: false, archive: true }],
    sound: true,
    narrowBandwidth: false,
    archive: {
      recAndArch: false,
      recMode: "bymotion",
    },
    motionDetector: false,
    analytics: {
      0: true,
      1: true,
      2: false,
    },
  },
];

const servers = [
  {
    id: 32,
    name: "serve 1",
    address: "10.10.10.2",
    port: 90,
  },
  {
    id: 4,
    name: "server 2",
    address: "102.10.10.2",
    port: 8080,
  },
];

const users = [
  {
    id: 9398,
    fullName: {
      first: "Jhon",
      last: "Doe",
    },
    name: "usrername1",
    group: [938],
    rights: {},
    type: "user",
  },
  {
    id: 777,
    fullName: {
      first: "Michel",
      last: "Franc",
    },
    name: "michfa",
    group: [938, 92280],
    rights: {},
    type: "user",
  },
];

const groups = [
  {
    id: 938,
    name: "administrators",
    users: [9398],
    rights: {
      changePassFromClient: true,
      archivingManagement: true,
    },
    type: "group",
  },
  {
    id: 92280,
    name: "os",
    users: [938],
    rights: {
      changePassFromClient: true,
      archivingManagement: false,
    },
    type: "group",
  },
];

const analytics = [
  {
    id: 0,
    name: "Worker Presence",
    camerasWithModule: [98239, 4888],
    enabledCameras: [98239],
  },
  {
    id: 1,
    name: "Trash Unloading",
    camerasWithModule: [5465, 7777],
    enabledCameras: [5465],
  },
  {
    id: 2,
    name: "Quality of Cleaning",
    camerasWithModule: [5465, 2210, 98239],
    enabledCameras: [98239, 5465],
  },
];

const cameraInit = {
  id: 100000000,
  enabled: false,
  name: "",
  address: "",
  brand: "rtsp",
  type: "camera",
  model: "rtsp",
  auth: {
    username: "",
    password: "",
  },
  streams: [{ format: "h264" }],
  rights: [{ group: "administrators", surveillance: true, archive: true }],
  sound: false,
  narrowBandwidth: false,
  archive: {
    recAndArch: false,
    recMode: "alwayson",
  },
  motionDetector: false,
  analytics: {
    0: false,
    1: false,
    2: false,
  },
}
const serverInit = {
  id: 1000000,
  name: "",
  address: "",
  port: "",
}

export { cameras, servers, users, groups, analytics, cameraInit, serverInit };
