# bofaclickdealer

A Chrome Plugin that clicks on unadded deals for Bank of America (Amerideals).

| Version  | Plugin ID |
| ------------- | ------------- |
| 1.1  | `mccolgfmjoinekplflefhjkdnkcfeacm`  |

# Innerworkings

The plugin uses a Page Action (when you click on the plugin's icon) to execute the `deals.js` script.
The icon will be grayed out until you visit a bankofamerica website AND until there are elements with the class `addDeal` (which is what the deals currently are).

The `deals.js` script simply finds elements with the class `addDeal` and clicks on them.

## Permissions

```json
"permissions" : [
    "declarativeContent",
    "activeTab"
  ]
```

* **declarativeContent:** to enable the icon when we are on bankofamerica and there are `addDeal` icons. Check `background.js`.
* **activeTab:** required to run the `deals.js` code to click on icons.

Feel free to always check the source code to ensure this isn't doing something malicious to your page.

# Installing

1. Clone this repo or download as a zip.
1. Load the Chrome Plugin as an unpacked extension.
1. Verify the Plugin ID of what you installed with what is noted on this readme.
