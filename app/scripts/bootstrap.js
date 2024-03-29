Tracker.bootstrap = (function(exports) {

  exports.sections = [
    {
      name:"Interactive", 
      key: "interactive",
      routes: ["att", "hyatt", "sheraton", "all"]
    },
    {
      name: "Film", 
      key: "film",
      routes: ["film1", "film2"]
    }
  ];


  exports.shuttles = [
    {
      deviceId: '23653545'
    },
    {
      deviceId: '23653453'
    },
    {
      deviceId: '23653503'
    },
    {
      deviceId: '26645092'
    },
    {
      deviceId: '26645100'
    },
    {
      deviceId: '26905231'
    },
    {
      deviceId: '26905249'
    },
    {
      deviceId: '26905298'
    },
    {
      deviceId: '26905280'
    },
    {
      deviceId: '26645134'
    },
    {
      deviceId: '26645142'
    },
    {
      deviceId: '26905256'
    },
    {
      deviceId: '26905264'
    },
    {
      deviceId: '26645118'
    },
    {
      deviceId: '26645084'
    },
    {
      deviceId: '26905306'
    },
    {
      deviceId: '26905272'
    },
    {
      deviceId: '26905223'
    },
    {
      deviceId: '867844000384928'
    },
    {
      deviceId: '867844000477961'
    },
    {
      deviceId: '867844000377625'
    },
    {
      deviceId: '867844000382419'
    },
    {
      deviceId: '867844000382245'
    },
    {
      deviceId: '867844000380025'
    },
    {
      deviceId: '867844000383698'
    },
    {
      deviceId: '867844000469349'
    },
    {
      deviceId: '867844000381999'
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
      name: 'ATT Conference Ctr'
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
      name: 'Hyatt/Long/Palmer'
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
      name: 'Omni/Sheraton'
    },
    {
      key: "film",
      location: {
        lat: '30.258739',
        lng: '-97.747335'
      },
      name: 'Film'
    },
    {
      key: "all",
      location: {
        lat: '30.258739',
        lng: '-97.747335'
      },
      name: 'Convention Ctr'
    }
  ];

  exports.routes = [
    {
      key: "all",
      locationKey: "all",
      startDate: '2013-03-08',
      endDate: '2013-03-11',
      startTime: '08:00',
      endTime: '19:00',
      mapCenter: {
        lat:30.275079,
        lng:-97.739997
      },
      overlayBounds: {
        sw: {
          lat:30.263330,
          lng:-97.746391
        },
        ne: {
          lat:30.281491,
          lng:-97.735448
        }
      },
      stops: ["acc", "omnin", "att", "omnis", "hilton"],
      shuttles: [
        '867844000383698',
        '867844000469349',
        '867844000381999'
      ]
    },
    {
      key: "att",
      locationKey: "att",
      image: 'att-route-2013.png',
      markerIcon: 'att_busasset_163ppi-01.png',
      startDate: '2013-03-08',
      endDate: '2013-03-11',
      startTime: '08:00',
      endTime: '19:00',
      mapCenter: {
        lat:30.275079,
        lng:-97.739997
      },
      overlayBounds: {
        sw: {
          lat:30.263330,
          lng:-97.746391
        },
        ne: {
          lat:30.281491,
          lng:-97.735448
        }
      },
      stops: ["acc", "omnin", "att", "omnis", "hilton"],
      shuttles: [
        '867844000383698',
        '867844000469349',
        '867844000381999',
        '26645084',
        '26905306',
        '26905272'
      ]
    },
    {
      key: "hyatt",
      image: 'hyattpalmer-route-2013.png',
      markerIcon: 'hyatt_busasset_163ppi-01.png',
      locationKey: "hyatt", 
      startDate: '2013-03-08',
      endDate: '2013-03-11',
      startTime: '08:00',
      endTime: '19:00',
      mapCenter: {
        lat:30.261588,
        lng:-97.746649
      },
      overlayBounds: {
        sw: {
          lat:30.258474,
          lng:-97.751970
        },
        ne: {
          lat:30.265517,
          lng:-97.739954
        }
      },
      stops: ["acc", "hyatt", "palmer"],
      shuttles: [
        '23653545', 
        '23653453', 
        '23653503', 
        '26645092', 
        '26645100', 
        '26645118',
        '26905223'
      ]
    },
    /*{
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
      shuttles: ['867844000477961']
    },
    */
    {
      key: "sheraton",
      image: 'sheraton-route-2013.png',
      //image: "",
      markerIcon: 'sheraton_busasset_163ppi-01.png',
      locationKey: "sheraton",
      startDate: '2013-03-08',
      endDate: '2013-03-11',
      startTime: '08:00',
      endTime: '19:00',
      mapCenter: {
        lat:30.266110,
        lng:-97.739654
      },
      overlayBounds: {
        sw: {
          lat:30.263293,
          lng:-97.743130
        },
        ne: {
          lat:30.272263,
          lng:-97.733259
        }
      },
      stops: ["acc", "omnin", "omnis", "hilton", "sheraton"],
      shuttles: [
        '867844000384928',
        '867844000477961',
        '867844000377625',
        '867844000382419',
        '867844000382245',
        '867844000380025'
      ]
    },
    {
      key: "film1",
      image: 'film-route-1-2013.png',
      //image: "",
      markerIcon: 'sheraton_busasset_163ppi-01.png',
      locationKey: "film",
      startDate: '2013-03-08',
      endDate: '2013-03-11',
      startTime: '10:00',
      endTime: '02:30',
      mapCenter: {
        lat:30.264887,
        lng:-97.746649
      },
      overlayBounds: {
        sw: {
          lat:30.258697,
          lng:-97.757764
        },
        ne: {
          lat:30.270484,
          lng:-97.739997
        }
      },
      stops: ["acc", "hyatt", "palmer"],
      shuttles: [
        '26905249',
        '26905298',
        '26905280',
        '26645134',
        '26645142',
        '26905256',
        '26905264'
      ]
    },
    {
      key: "film2",
      image: 'film-route-2-2013.png',
      //image: "",
      markerIcon: 'sheraton_busasset_163ppi-01.png',
      locationKey: "film",
      startDate: '2013-03-13',
      endDate: '2013-03-16',
      startTime: '10:00',
      endTime: '02:30',
      mapCenter: {
        lat:30.264887,
        lng:-97.746649
      },
      overlayBounds: {
        sw: {
          lat:30.258252,
          lng:-97.758322
        },
        ne: {
          lat:30.270261,
          lng:-97.740040
        }
      },
      stops: ["acc", "hyatt", "palmer"],
      shuttles: [
        '26905249',
        '26905298',
        '26905280',
        '26645134',
        '26645142',
        '26905256',
        '26905264'
      ]
    }
  ];

  return exports;
})(Tracker.bootstrap || {});