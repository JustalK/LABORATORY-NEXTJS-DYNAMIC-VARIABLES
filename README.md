# LABORATORY-NEXTJS-DYNAMIC-VARIABLES

This project is the little example for testing how to inject environment variables into next-js on a built version.

## Organization

#### Organization of the global folder

| Folder's Name  | Description of the folder                               | Proxy               |
| :------------- | :------------------------------------------------------ | :------------------ |
| `nginx`        | Containing the reverse-proxy configuration              |                     |
| `server-next`  | Server containing the next.js frontend                  | api.server-next.net |
| `server1`      | Simple Server API 1                                     | api.server1.net     |
| `server2`      | Simple Server API 2                                     | api.server2.next    |

#### Organization in the project

The project have 3 tests :

- **test1**: Simple example how to call an interne API in the backend of Next.js
- **test2**: Example of a call to an API externe
- **test3**: Example of a call to an API externe depending of an environment variable

## Development

![Alt text](documentation/presentation.png?raw=true "NEXTJS")

This image presents the idea for using dynamic variables at runtime from the process.env. You cannot use such a variable using the `publicRuntimeConfig`, the only way is to use the `serverRuntimeConfig`.

The trick is to use `swr` for calling the internal API of Next.js and then call the external API from there using environment variables.

For example, in the folder `src/pages/test3`, the internal API is called using `swr`. In the internal API, inside `src/pages/api/test3`, the external API is called with `axios`. For getting the API url, we are using the Config object of `Next.js` :

```
import getConfig from 'next/config'
const { serverRuntimeConfig } = getConfig()
```

The variables inside `serverRuntimeConfig` is set in the `next.config.js` and link `API_URL` with `process.env.API_URL`. This environment variable is define inside the `docker-compose.yml`.

## Running

First, you need to build the production version for Next.js with the following command (use it only one time):

```bash
$ npm run build
```

Once done, you can then run the docker-compose with the following commands:

```bash
$ npm run start
$ npm run stop
```

Try browsing to `http://localhost:3000` or `http://api.server-next.net` (if you have set properly your hosts file)

Try changing the `API_URL` in the `server-next` service from server1:3000 to server2:3000 without rebuilding the production version of Next.
You can see the difference on the page `http://localhost:3000/test3`
