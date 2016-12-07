CORS Didactic Example.
Jonathan Ginsburg © December 6, 2016.

In this example, the HTML document from server A loads a javascript from server A that tries to AJAX load a javascript (the asset) from server B and the User-Agent used (Chrome Version 54.0.2840.98 (64-bit)) does not allow the usage of the retrieved asset due to the missing Header Access-Control-Allow-Origin on B's response. Note that the User-Agent tried to apply CORS by sending an Origin header to server B, when requesting the asset.
