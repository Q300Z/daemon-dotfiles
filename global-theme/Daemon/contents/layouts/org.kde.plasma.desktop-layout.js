var plasma = getApiVersion(1);

var layout = {
  desktops: [
    {
      applets: [
        {
          config: {
            "/": {
              CurrentPreset: "org.kde.plasma.systemmonitor",
              UserBackgroundHints: "ShadowBackground",
            },
            "/Appearance": {
              chartFace: "org.kde.ksysguard.horizontalbars",
              showTitle: "false",
              title: "Total usage",
            },
            "/ConfigDialog": {
              DialogHeight: "450",
              DialogWidth: "600",
            },
            "/SensorColors": {
              "cpu/all/usage": "65,168,160",
              "disk/all/read": "168,65,73",
              "disk/all/write": "65,168,160",
              "gpu/gpu0/usage": "168,65,80",
              "memory/physical/usedPercent": "65,168,113",
            },
            "/Sensors": {
              highPrioritySensorIds:
                '["cpu/all/usage","memory/physical/usedPercent","gpu/gpu0/usage"]',
              lowPrioritySensorIds: "[]",
              totalSensors: "[]",
            },
          },
          "geometry.height": 0,
          "geometry.width": 0,
          "geometry.x": 0,
          "geometry.y": 0,
          plugin: "org.kde.plasma.systemmonitor.cpu",
          title: "Total usage",
        },
      ],
      config: {
        "/": {
          "ItemGeometries-1920x1080": "Applet-114:1264,848,352,112,0;",
          ItemGeometriesHorizontal: "Applet-114:1264,848,352,112,0;",
          formfactor: "0",
          immutability: "1",
          lastScreen: "0",
          wallpaperplugin: "org.kde.image",
        },
        "/General": {
          ToolBoxButtonState: "topcenter",
          ToolBoxButtonX: "439",
          ToolBoxButtonY: "36",
        },
        "/Wallpaper/org.kde.image/General": {
          Image: "CHANGE_ME_WALLPAPER",
        },
      },
      wallpaperPlugin: "org.kde.image",
    },
  ],
  panels: [
    {
      alignment: "left",
      applets: [
        {
          config: {
            "/General": {
              expanding: "false",
              length: "30",
            },
          },
          plugin: "org.kde.plasma.panelspacer",
        },
        {
          config: {
            "/": {
              PreloadWeight: "100",
              popupHeight: "525",
              popupWidth: "655",
            },
            "/ConfigDialog": {
              DialogHeight: "660",
              DialogWidth: "880",
            },
            "/General": {
              favoritesPortedToKAstats: "true",
              icon: "CHANGE_ME_ICON",
              systemFavorites: "suspend\\,hibernate\\,reboot\\,shutdown",
            },
          },
          plugin: "org.kde.plasma.kickoff",
        },
        {
          config: {
            "/General": {
              expanding: "false",
              length: "50",
            },
          },
          plugin: "org.kde.plasma.panelspacer",
        },
        {
          config: {
            "/ConfigDialog": {
              DialogHeight: "660",
              DialogWidth: "880",
            },
            "/General": {
              iconSpacing: "0",
              launchers:
                "applications:systemsettings.desktop,preferred://filemanager,applications:org.kde.konsole.desktop",
              maxStripes: "1",
            },
          },
          plugin: "org.kde.plasma.icontasks",
        },
        {
          config: {
            "/ConfigDialog": {
              DialogHeight: "540",
              DialogWidth: "720",
            },
          },
          plugin: "org.kde.plasma.pager",
        },
      ],
      config: {
        "/": {
          formfactor: "3",
          immutability: "1",
          lastScreen: "0",
          wallpaperplugin: "org.kde.image",
        },
        "/ConfigDialog": {
          DialogHeight: "1080",
          DialogWidth: "146",
        },
      },
      height: 6.9375,
      hiding: "normal",
      location: "left",
      maximumLength: 67.5,
      minimumLength: 67.5,
      offset: 0,
    },
    {
      alignment: "right",
      applets: [
        {
          config: {
            "/General": {
              expanding: "false",
              length: "10",
            },
          },
          plugin: "org.kde.plasma.panelspacer",
        },
        {
          config: {},
          plugin: "org.kde.plasma.appmenu",
        },
        {
          config: {},
          plugin: "org.kde.plasma.panelspacer",
        },
        {
          config: {},
          plugin: "org.kde.plasma.nightcolorcontrol",
        },
        {
          config: {
            "/": {
              PreloadWeight: "65",
            },
          },
          plugin: "org.kde.plasma.systemtray",
        },
        {
          config: {
            "/General": {
              expanding: "false",
              length: "30",
            },
          },
          plugin: "org.kde.plasma.panelspacer",
        },
        {
          config: {},
          plugin: "org.kde.plasma.digitalclock",
        },
        {
          config: {
            "/General": {
              expanding: "false",
              length: "10",
            },
          },
          plugin: "org.kde.plasma.panelspacer",
        },
      ],
      config: {
        "/": {
          formfactor: "2",
          immutability: "1",
          lastScreen: "0",
          wallpaperplugin: "org.kde.image",
        },
        "/ConfigDialog": {
          DialogHeight: "66",
          DialogWidth: "1920",
        },
      },
      height: 2.25,
      hiding: "normal",
      location: "top",
      maximumLength: 110.0625,
      minimumLength: 110.0625,
      offset: 0,
    },
  ],
  serializationFormatVersion: "1",
};
plasma.loadSerializedLayout(layout);
