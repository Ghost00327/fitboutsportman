# fbfrontend

### Welcome!

## Please read the project description [here](https://docs.google.com/document/d/10VTIRfONWTSt6_g2lyqRsWOGg1FzPBYsRbc7NrgUnbQ/edit?usp=sharing) before doing anything!


## Deployment

Each commit to `master` branch triggers netlify build and deploy to https://app-dev.fitbout.io.
Please make sure that `npm run build` finishes without any warnings before commiting anything.

Current deploy status: [![Netlify Status](https://api.netlify.com/api/v1/badges/de16e651-9a6e-4cdd-b9e9-6105c7f28158/deploy-status)](https://app.netlify.com/sites/sensational-hamster-5e174b/deploys)


## Commiting

Please commit your changes directly to `master` branch. You are free to use feature branches but remember that they won't be deployed anywhere.
You must not need commit shitty commits like `fix`, `test` or anything like that. Use meaningful commit messages.


## REST API

Project uses remote Fitbout API server. For now there aren't any request/response specification included. Please use dev console in order to check response body. If you need any endpoint to be implemented or adjusted please talk to @jakon89

## Project Setup

Project uses standard tools like `npm`, `vite`, `typescript` - please make sure you have them installed.
The app profile `dev-proxy` is configured to fetch data from remote `dev` backend instance. Frontend developers do not need to run the backend service locally.

In order to skip oauth flow locally the `vite.config.ts` is configured to send `X-Impersonate-User` header to the backend. Value of this header determines which user will be impersonated for each request.
This is a bit hacky approach but it is more than enough to start simple.


Allowed / pre-configured user IDs:
* For strava integration: `1`
* For Google Fit integration: `2`

Please see [vite.config.ts](vite.config.ts) for further info.


```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev-proxy
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
