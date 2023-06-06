const cameras = [
    {
      id: 98239,
      name: "camera-outdoor",
      address: "10.10.10.10",
      brand: "html",
      type: "camera",
      model: "rtsp",
      auth: {
        username: "admin",
        password: "admin",
      },
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
        workerPresence: false,
        trashUnloading: true,
        qualityOfCleaning: false,
      },
    },
    {
      id: 5465,
      name: "camera-indoou",
      address: "10.10.140.10",
      brand: "rtsp",
      type: "camera",
      model: "rtsp",
      auth: {
        username: "user",
        password: "admin",
      },
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
        workerPresence: true,
        trashUnloading: true,
        qualityOfCleaning: false,
      },
    },
  ];
  
  export { cameras };
  