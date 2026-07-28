var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometries-2259x1271": "",
                    "ItemGeometries-2560x1440": "",
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/General": {
                    "positions": "{\"2259x1271\":[],\"2560x1440\":[]}"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///home/josie/Downloads/10-5-Server-6k.jpg",
                    "SlidePaths": "/usr/share/wallpapers/"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.pager"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "customButtonImage": "org.kde.plasma.quicklaunch",
                            "floating": "true",
                            "launcherPosition": "1",
                            "useCustomButtonImage": "true"
                        }
                    },
                    "plugin": "TahoeLauncher"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/General": {
                            "launchers": "applications:firefox.desktop,applications:thunderbird-esr.desktop,applications:dev.vencord.Vesktop.desktop,applications:org.kde.dolphin.desktop,applications:steam.desktop,applications:com.heroicgameslauncher.hgl.desktop,applications:org.prismlauncher.PrismLauncher.desktop,applications:org.strawberrymusicplayer.strawberry.desktop,applications:org.kde.kwrite.desktop"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 3.3333333333333335,
            "hiding": "normal",
            "location": "bottom",
            "maximumLength": 125.5,
            "minimumLength": 125.5,
            "offset": 0
        },
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/": {
                            "popupHeight": "295",
                            "popupWidth": "180"
                        },
                        "/Apperance": {
                            "cmdList": "kitty --hold sh -c \"exec fish -c 'fastfetch'\",separator,systemsettings,kitty --hold emerge -h,separator,xkill,separator,qdbus6 org.kde.kglobalaccel /component/org_kde_powerdevil invokeShortcut 'Sleep',qdbus6 org.kde.LogoutPrompt /LogoutPrompt promptReboot,qdbus6 org.kde.LogoutPrompt /LogoutPrompt promptShutDown,separator,qdbus6 org.freedesktop.ScreenSaver /ScreenSaver Lock,qdbus6 org.kde.LogoutPrompt /LogoutPrompt promptLogout",
                            "icon": "/home/josie/Downloads/gentoo-signet.svg",
                            "width": "180"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "626",
                            "DialogWidth": "1308"
                        }
                    },
                    "plugin": "org.51n7.kMenu"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.appmenu"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "CurrentPreset": "org.kde.plasma.systemmonitor",
                            "popupHeight": "222",
                            "popupWidth": "156"
                        },
                        "/Appearance": {
                            "chartFace": "org.kde.ksysguard.textonly",
                            "title": "CPU Temp"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/SensorColors": {
                            "cpu/all/maximumFrequency": "0,85,255",
                            "cpu/all/maximumTemperature": "61,69,233",
                            "cpu/all/minimumFrequency": "255,0,127",
                            "cpu/all/minimumTemperature": "255,0,127"
                        },
                        "/SensorLabels": {
                            "cpu/all/averageTemperature": "Average",
                            "cpu/all/maximumFrequency": " ",
                            "cpu/all/maximumTemperature": "CPU",
                            "cpu/all/minimumFrequency": " ",
                            "cpu/all/minimumTemperature": " ",
                            "gpu/gpu0/temp2": "GPU_junc",
                            "gpu/gpu0/temp3": "GPU_mem",
                            "gpu/gpu0/temperature": "GPU",
                            "lmsensors/nvme-pci-0400/temp1": "NVMe1",
                            "lmsensors/nvme-pci-0600/temp1": "NVMe2"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"cpu/all/maximumTemperature\",\"cpu/all/maximumFrequency\",\"cpu/all/minimumTemperature\",\"cpu/all/minimumFrequency\"]",
                            "lowPrioritySensorIds": "[\"cpu/all/averageTemperature\",\"lmsensors/nvme-pci-0400/temp1\",\"lmsensors/nvme-pci-0600/temp1\",\"gpu/gpu0/temperature\",\"gpu/gpu0/temp2\",\"gpu/gpu0/temp3\",\"cpu/all/maximumFrequency\"]",
                            "totalSensors": "[]"
                        }
                    },
                    "plugin": "org.kde.plasma.systemmonitor"
                },
                {
                    "config": {
                        "/": {
                            "CurrentPreset": "org.kde.plasma.systemmonitor",
                            "popupHeight": "504",
                            "popupWidth": "300"
                        },
                        "/Appearance": {
                            "chartFace": "org.kde.ksysguard.barchart",
                            "title": "Total CPU Usage"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/SensorColors": {
                            "cpu/all/usage": "61,174,233",
                            "cpu/cpu0/usage": "85,85,255",
                            "cpu/cpu1/usage": "85,85,255",
                            "cpu/cpu10/usage": "85,85,255",
                            "cpu/cpu11/usage": "85,85,255",
                            "cpu/cpu12/usage": "255,0,127",
                            "cpu/cpu13/usage": "255,0,127",
                            "cpu/cpu14/usage": "255,0,127",
                            "cpu/cpu15/usage": "255,0,127",
                            "cpu/cpu2/usage": "85,85,255",
                            "cpu/cpu3/usage": "85,85,255",
                            "cpu/cpu4/usage": "85,85,255",
                            "cpu/cpu5/usage": "85,85,255",
                            "cpu/cpu6/usage": "85,85,255",
                            "cpu/cpu7/usage": "85,85,255",
                            "cpu/cpu8/usage": "85,85,255",
                            "cpu/cpu9/usage": "85,85,255",
                            "cpu/cpu\\d+/usage": "233,80,61"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"cpu/cpu12/usage\",\"cpu/cpu13/usage\",\"cpu/cpu14/usage\",\"cpu/cpu15/usage\",\"cpu/cpu0/usage\",\"cpu/cpu1/usage\",\"cpu/cpu2/usage\",\"cpu/cpu3/usage\",\"cpu/cpu4/usage\",\"cpu/cpu5/usage\",\"cpu/cpu6/usage\",\"cpu/cpu7/usage\",\"cpu/cpu8/usage\",\"cpu/cpu9/usage\",\"cpu/cpu10/usage\",\"cpu/cpu11/usage\"]",
                            "lowPrioritySensorIds": "[]",
                            "totalSensors": "[\"cpu/all/usage\"]"
                        }
                    },
                    "plugin": "org.kde.plasma.systemmonitor.cpu"
                },
                {
                    "config": {
                        "/": {
                            "CurrentPreset": "org.kde.plasma.systemmonitor",
                            "popupHeight": "226",
                            "popupWidth": "164"
                        },
                        "/Appearance": {
                            "chartFace": "org.kde.ksysguard.barchart",
                            "title": "GPU Usage"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/SensorColors": {
                            "gpu/gpu0/usage": "0,255,0",
                            "gpu/gpu0/usedVram": "0,255,0",
                            "gpu/gpu\\d+/usage": "95,233,61",
                            "gpu/gpu\\d+/usedVram": "233,61,134"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"gpu/gpu0/usage\"]"
                        }
                    },
                    "plugin": "org.kde.plasma.systemmonitor"
                },
                {
                    "config": {
                        "/": {
                            "CurrentPreset": "org.kde.plasma.systemmonitor",
                            "popupHeight": "226",
                            "popupWidth": "285"
                        },
                        "/Appearance": {
                            "chartFace": "org.kde.ksysguard.barchart",
                            "title": "RAM Usage"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/SensorColors": {
                            "memory/physical/usedPercent": "61,233,82"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"memory/physical/usedPercent\"]"
                        }
                    },
                    "plugin": "org.kde.plasma.systemmonitor"
                },
                {
                    "config": {
                        "/": {
                            "CurrentPreset": "org.kde.plasma.systemmonitor",
                            "popupHeight": "194",
                            "popupWidth": "204"
                        },
                        "/Appearance": {
                            "chartFace": "org.kde.ksysguard.linechart",
                            "title": "Network Usage"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/SensorColors": {
                            "network/all/download": "255,0,127",
                            "network/all/upload": "85,85,255"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"network/all/download\",\"network/all/upload\"]"
                        }
                    },
                    "plugin": "org.kde.plasma.systemmonitor"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "popupHeight": "450",
                            "popupWidth": "560"
                        },
                        "/Appearance": {
                            "autoFontAndSize": "false",
                            "customDateFormat": "ddd MMM d",
                            "dateDisplayFormat": "BesideTime",
                            "dateFormat": "custom",
                            "fontFamily": "Noto Sans",
                            "fontWeight": "400"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "us.rbrent.digitalclock"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 1.5555555555555556,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 125.5,
            "minimumLength": 125.5,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
