# bofadealer

A Chrome Plugin that clicks on unadded deals for Bank of America (Amerideals).

**Plugin ID**: `pgindlpjpahnfobnabgoehenebhihlph`

# Innerworkings

The plugin uses a Browser Action (when you click on the plugin's icon) to execute the `deals.js` script.

The `deals.js` script simply finds elements with the class `addDeal` and clicks on them.

Feel free to always check the source code to ensure this isn't doing something malicious to your page

# Installing

1. Clone this repo or download as a zip.
1. Load the Chrome Plugin as an unpacked extension.
1. Verify the Plugin ID.