# Apollo Example NodeJS rest API service

An extremely simple Docker container used internally for demonstrating some of
the concepts for [Apollo](https://github.com/Capgemini/Apollo).

The image is based on gliderlabs/alpine and contains a nodejs service exposing
a very simple REST endpoint, which returns the current version of itself.

## Usage

### Building with Docker compose

- Ensure you have Docker and Docker compose installed. See [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/) to get started. If you are using Mac you will probably need to install [boot2docker](http://boot2docker.io/)
- Build the Dockerfile:

```
git clone https://github.com/Capgemini/apollo-example-nodejs-rest.git
cd apollo-example-nodejs-rest
docker-compose build
```
