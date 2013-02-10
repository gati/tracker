Tracker.bootstrap = (function(exports) {

  exports.sections = [
    {
      name:"Interactive", 
      key: "interactive",
      routes: ["att", "hyatt", "holiday", "sheraton"]
    },
    {
      name: "Film", 
      key: "film",
      routes: []
    }
  ];

  exports.shuttles = [
    {
      deviceId: "26645092",
      currentPosition: {
        lat: 30.263373,
        lng: -97.739911
      }
    },
    {
      deviceId: "26645100",
      currentPosition: {
        lat: 30.263373,
        lng: -97.739911
      }
    },
    {
      deviceId: '26905231',
      currentPosition: {
        lat: 30.263373,
        lng: -97.739911
      }
    },
    {
      deviceId: '26905249',
      currentPosition: {
        lat: 30.263373,
        lng: -97.739911
      }
    },
    {
      deviceId: '26905298',
      currentPosition: {
        lat: 30.263373,
        lng: -97.739911
      }
    },
    {
      deviceId: '26645084',
      currentPosition: {
        lat: 30.263373,
        lng: -97.739911
      }
    },
    {
      deviceId: '26645118',
      currentPosition: {
        lat: 30.263373,
        lng: -97.739911
      }
    },
    {
      deviceId: '26905223'
    },
    {
      deviceId: '26905272'
    },
    {
      deviceId: '26905306'
    },
    {
      deviceId: '26645134'
    },
    {
      deviceId: '26905256'
    },
    {
      deviceId: '26905264'
    },
    {
      deviceId: '26905314'
    },
    {
      deviceId: '26645126'
    },
    {
      deviceId: '26905280'
    }
  ];

  exports.stops = [
    {
      key: "acc",
      location: {
        lat: '30.263373',
        lng: '-97.739911'
      },
      name: 'Austin Convention Center'
    },
    {
      key: 'omnin',
      location: {
        lat: '30.269526',
        lng: '-97.740726'
      },
      name: 'Omni Northbound',
      description: 'Access to: Driskill, SFA InterContinental'
    },
    {
      key: 'att',
      location: {
        lat: '30.281311',
        lng: '-97.740426'
      },
      name: 'AT&T Conference Center'
    },
    {
      key: 'omnis',
      location: {
        lat: '30.269155',
        lng: '-97.739567'
      },
      name: 'Omni Southbound'
    },
    {
      key: 'hilton',
      location: {
        lat: '30.265374',
        lng: '-97.741026'
      },
      name: 'Hilton Downtown/ Courtyard Marriott',
      description: 'Access to: Hilton Garden Inn, Palm Park'
    },  
    {
      key: "holiday",
      location: {
        lat: '30.253625',
        lng: '-97.737143'
      },
      name: 'Holiday Inn'
    },  
    {
      key: "hyatt",
      location: {
        lat: '30.258739',
        lng: '-97.747335'
      },
      name: 'Hyatt'
    },
    {
      key: "palmer",
      location: {
        lat: '30.259369',
        lng: '-97.753987'
      },
      name: 'Palmer'
    },  
    {
      key: "sheraton",
      location: {
        lat: '30.270971',
        lng: '-97.734717'
      },
      name: 'Sheraton'
    }
  ];

  exports.routes = [
    {
      key: "att",
      locationKey: "att",
      image: 'att-route-retry.png',
      markerIcon: 'att_busasset_163ppi-01.png',
      mapCenter: {
        lat:30.274455,
        lng:-97.740254
      },
      overlayBounds: {
        sw: {
          lat:30.262526,
          lng:-97.744689
        },
        ne: {
          lat:30.281984,
          lng:-97.734991
        }
      },
      stops: ["acc", "omnin", "att", "omnis", "hilton"],
      shuttles: ['26645092','26645100','26905231','26905249','26905298']
    },
    {
      key: "hyatt",
      image: 'hyattpalmer-route.png',
      markerIcon: 'hyatt_busasset_163ppi-01.png',
      locationKey: "hyatt", 
      mapCenter: {
        lat:30.256997,
        lng:-97.751412
      },
      overlayBounds: {
        sw: {
          lat:30.256141,
          lng:-97.758490
        },
        ne: {
          lat:30.265964,
          lng:-97.739135
        }
      },
      stops: ["acc", "hyatt", "palmer"],
      shuttles: ['26645134','26905256','26905264','26905314','26645126']
    },
    {
      key: "holiday",
      image: 'holidayinn-route.png',
      markerIcon: 'holidayinn_busasset_163ppi-01.png',
      locationKey: "holiday",
      mapCenter: {
        lat:30.255997,
        lng:-97.737057
      },
      overlayBounds: {
        sw: {
          lat:30.253586,
          lng:-97.743559
        },
        ne: {
          lat:30.264447,
          lng:-97.735705
        }
      },
      stops: ["acc", "holiday"],
      shuttles: ['26905280']
    },
    {
      key: "sheraton",
      image: 'sheraton-route.png',
      markerIcon: 'sheraton_busasset_163ppi-01.png',
      locationKey: "sheraton",
      mapCenter: {
        lat:30.264485,
        lng:-97.737893
      },
      overlayBounds: {
        sw: {
          lat:30.262749,
          lng:-97.743574
        },
        ne: {
          lat:30.272719,
          lng:-97.733102
        }
      },
      stops: ["acc", "omnin", "omnis", "hilton", "sheraton"],
      shuttles: ['26645084','26645118','26905223','26905272','26905306']
    }
  ];

  return exports;
})(Tracker.bootstrap || {});