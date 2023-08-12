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
              title: "Daemon",
            },
            "/ConfigDialog": {
              DialogHeight: "630",
              DialogWidth: "840",
            },
            "/SensorColors": {
              "cpu/all/usage": "91,238,220",
              "gpu/all/usage": "48,251,240",
              "memory/physical/usedPercent": "91,238,220",
            },
            "/Sensors": {
              highPrioritySensorIds:
                '["cpu/all/usage","gpu/all/usage","memory/physical/usedPercent"]',
            },
          },
          "geometry.height": 0,
          "geometry.width": 0,
          "geometry.x": 0,
          "geometry.y": 0,
          plugin: "org.kde.plasma.systemmonitor",
          title: "Daemon",
        },
      ],
      config: {
        "/": {
          "ItemGeometries-1920x1080": "Applet-0:1280,848,368,112,0;",
          ItemGeometriesHorizontal: "Applet-0:1280,848,368,112,0;",
          formfactor: "0",
          immutability: "1",
          lastScreen: "0",
          wallpaperplugin: "org.kde.image",
        },
        "/General": {
          ToolBoxButtonState: "topcenter",
          ToolBoxButtonX: "439",
          ToolBoxButtonY: "38",
        },
        "/Wallpaper/org.kde.image/General": {
          Image: "CHANGE_ME_WALLPAPER",
        },
      },
      wallpaperPlugin: "org.kde.image",
    },
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
              title: "Daemon",
            },
            "/ConfigDialog": {
              DialogHeight: "630",
              DialogWidth: "840",
            },
            "/SensorColors": {
              "cpu/all/usage": "91,238,220",
              "gpu/all/usage": "48,251,240",
              "memory/physical/usedPercent": "91,238,220",
            },
            "/Sensors": {
              highPrioritySensorIds:
                '["cpu/all/usage","gpu/all/usage","memory/physical/usedPercent"]',
            },
          },
          "geometry.height": 0,
          "geometry.width": 0,
          "geometry.x": 0,
          "geometry.y": 0,
          plugin: "org.kde.plasma.systemmonitor",
          title: "Daemon",
        },
      ],
      config: {
        "/": {
          "ItemGeometries-1920x1080": "Applet-1:1280,832,368,144,0;",
          ItemGeometriesHorizontal: "Applet-1:1280,832,368,144,0;",
          formfactor: "0",
          immutability: "1",
          lastScreen: "1",
          wallpaperplugin: "org.kde.image",
        },
        "/General": {
          ToolBoxButtonState: "topcenter",
          ToolBoxButtonX: "439",
          ToolBoxButtonY: "38",
        },
        "/Wallpaper/org.kde.image/General": {
          Image: "CHANGE_ME_WALLPAPER",
        },
      },
      wallpaperPlugin: "org.kde.image",
    },
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
              title: "Daemon",
            },
            "/ConfigDialog": {
              DialogHeight: "630",
              DialogWidth: "840",
            },
            "/SensorColors": {
              "cpu/all/usage": "91,238,220",
              "gpu/all/usage": "48,251,240",
              "memory/physical/usedPercent": "91,238,220",
            },
            "/Sensors": {
              highPrioritySensorIds:
                '["cpu/all/usage","gpu/all/usage","memory/physical/usedPercent"]',
            },
          },
          "geometry.height": 0,
          "geometry.width": 0,
          "geometry.x": 0,
          "geometry.y": 0,
          plugin: "org.kde.plasma.systemmonitor",
          title: "Daemon",
        },
      ],
      config: {
        "/": {
          "ItemGeometries-1920x1080": "Applet-2:1280,832,368,144,0;",
          ItemGeometriesHorizontal: "Applet-2:1280,832,368,144,0;",
          formfactor: "0",
          immutability: "1",
          lastScreen: "2",
          wallpaperplugin: "org.kde.image",
        },
        "/General": {
          ToolBoxButtonState: "topcenter",
          ToolBoxButtonX: "439",
          ToolBoxButtonY: "32",
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
              DialogHeight: "1024",
              DialogWidth: "1797",
            },
            "/General": {
              iconSpacing: "0",
              launchers:
                "applications:systemsettings.desktop,preferred://filemanager,applications:vivaldi.desktop,applications:brave.desktop,applications:org.kde.konsole.desktop",
              maxStripes: "1",
            },
          },
          plugin: "org.kde.plasma.icontasks",
        },
        {
          config: {},
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
      height: 5.75,
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
          config: {
            "/": {
              PreloadWeight: "60",
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
          config: {
            "/": {
              PreloadWeight: "55",
              popupHeight: "450",
              popupWidth: "396",
            },
            "/Appearance": {
              dateDisplayFormat: "BesideTime",
              enabledCalendarPlugins:
                "/usr/lib/qt/plugins/plasmacalendarplugins/holidaysevents.so",
              showSeconds: "true",
            },
            "/ConfigDialog": {
              DialogHeight: "1022",
              DialogWidth: "1770",
            },
          },
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
      height: 2.375,
      hiding: "normal",
      location: "top",
      maximumLength: 110.25,
      minimumLength: 110.25,
      offset: 0,
    },
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
              DialogHeight: "1024",
              DialogWidth: "1797",
            },
            "/General": {
              iconSpacing: "0",
              launchers:
                "applications:systemsettings.desktop,preferred://filemanager,applications:vivaldi.desktop,applications:brave.desktop,applications:org.kde.konsole.desktop",
              maxStripes: "1",
            },
          },
          plugin: "org.kde.plasma.icontasks",
        },
        {
          config: {},
          plugin: "org.kde.plasma.pager",
        },
      ],
      config: {
        "/": {
          formfactor: "3",
          immutability: "1",
          lastScreen: "2",
          wallpaperplugin: "org.kde.image",
        },
        "/ConfigDialog": {
          DialogHeight: "1080",
          DialogWidth: "146",
        },
      },
      height: 5.75,
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
          config: {
            "/": {
              PreloadWeight: "60",
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
          config: {
            "/": {
              PreloadWeight: "55",
              popupHeight: "450",
              popupWidth: "396",
            },
            "/Appearance": {
              dateDisplayFormat: "BesideTime",
              enabledCalendarPlugins:
                "/usr/lib/qt/plugins/plasmacalendarplugins/holidaysevents.so",
              showSeconds: "true",
            },
            "/ConfigDialog": {
              DialogHeight: "1022",
              DialogWidth: "1770",
            },
          },
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
          lastScreen: "1",
          wallpaperplugin: "org.kde.image",
        },
        "/ConfigDialog": {
          DialogHeight: "66",
          DialogWidth: "1920",
        },
      },
      height: 2.375,
      hiding: "normal",
      location: "top",
      maximumLength: 110,
      minimumLength: 109.9375,
      offset: 0,
    },
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
              DialogHeight: "1024",
              DialogWidth: "1797",
            },
            "/General": {
              iconSpacing: "0",
              launchers:
                "applications:systemsettings.desktop,preferred://filemanager,applications:vivaldi.desktop,applications:brave.desktop,applications:org.kde.konsole.desktop",
              maxStripes: "1",
            },
          },
          plugin: "org.kde.plasma.icontasks",
        },
        {
          config: {},
          plugin: "org.kde.plasma.pager",
        },
      ],
      config: {
        "/": {
          formfactor: "3",
          immutability: "1",
          lastScreen: "1",
          wallpaperplugin: "org.kde.image",
        },
        "/ConfigDialog": {
          DialogHeight: "1080",
          DialogWidth: "146",
        },
      },
      height: 5.75,
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
          config: {
            "/": {
              PreloadWeight: "60",
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
          config: {
            "/": {
              PreloadWeight: "55",
              popupHeight: "450",
              popupWidth: "396",
            },
            "/Appearance": {
              dateDisplayFormat: "BesideTime",
              enabledCalendarPlugins:
                "/usr/lib/qt/plugins/plasmacalendarplugins/holidaysevents.so",
              showSeconds: "true",
            },
            "/ConfigDialog": {
              DialogHeight: "1022",
              DialogWidth: "1770",
            },
          },
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
          lastScreen: "2",
          wallpaperplugin: "org.kde.image",
        },
        "/ConfigDialog": {
          DialogHeight: "66",
          DialogWidth: "1920",
        },
      },
      height: 2.375,
      hiding: "normal",
      location: "top",
      maximumLength: 110.1875,
      minimumLength: 110.125,
      offset: 0,
    },
  ],
  serializationFormatVersion: "1",
};
plasma.loadSerializedLayout(layout);
