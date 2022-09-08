Rock Map
==========

https://models-resources.concord.org/rock-map/

Initially, this app has been built by Sean for TecRock team and provided as a ZIP archive.
See https://www.pivotaltracker.com/story/show/182702264 for more context.

It's been built using TerraJS framework:
- https://terria.io/
- https://github.com/TerriaJS/terriajs
- https://github.com/TerriaJS/TerriaMap (a complete website that was a base for this app)

## Data

Sean's data is available in this Github repository: https://github.com/mappinggnome/TecRocks-Data.

It's been also copied to `wwwroot/tecrock-data`, so it can be deployed together with the whole app to AWS S3 bucket.

## Modifications

Following modifications to the original Sean's app have been made:

- replacement of node-sass with sass to let developers build the app on Apple Silicon
- a small workaround of the SASS issues in TerriaJS framework (see package.json#fix-terriajs-sass script and related SCSS file)
- GeoJSON rock data placed at `wwwroot/tecrock-data`
- Config JSON file has been updated to point to a new location

## Development

Most of the steps and requirements described here https://docs.terria.io/guide/getting-started/ are valid
and apply to this application.

However, because `node-sass` have been replaced with `sass` package, it's also necessary to run `yarn fix-terriajs-sass`
between `yarn install` and `yarn gulp` steps.

```
export NODE_OPTIONS=--max_old_space_size=4096

npm install -g yarn

yarn install
yarn fix-terriajs-sass
yarn gulp
yarn start
```

Note that TerriaJS can use its own server, or it can be served by any other server. Some features might be missing
without terriajs-server, but they don't seem important for TecRock. See:
https://docs.terria.io/guide/deploying/deploying-terriamap/.

So, instead of running `yarn start`, you can also go to `wwwroot` dir and run any http server. For example:

```
npm i -g http-serve
cd wwwroot
http-serve .
```

This might be useful to test static deployment method (see below).

## Deployment

TerriaJS has two possible ways of deployment:
- using its own server
- using any HTTP server that serves just static files (HTML, CSS, data, etc.)

You can read more about the differences here:
https://docs.terria.io/guide/deploying/deploying-terriamap/

TerriaJS-server can be deployed to AWS EC2 and there are already some script and tools that should make it easier.
However, it doesn't seem it's necessary for TecRocks.

Currently, the whole content of `wwwroot` directory (after the successful build) has been copied to CC S3 bucket:
`models-resources/rock-map`. So, the deployed app is available at:

https://models-resources.concord.org/rock-map/

There is no automated deployment process implemented yet.
