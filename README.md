# Portkey Gateway Example Application

This repository contains an example application for routing requests to a [Portkey Gateway](https://portkey.ai/features/ai-gateway) deployment.  The example is a simple Node.js site that includes a prompt and a model selection box, allowing users to choose which LLM model they wish to query.  You can find out more by visiting the [associated tutorial](https://koyeb.com/tutorials/deploy-portkey-gateway-to-koyeb-to-streamline-requests-to-200-plus-llms).

## Prerequisites

Before you deploy the example application, you'll need to do the following:

* Deploy the [Portkey Gateway Docker image](https://hub.docker.com/r/portkeyai/gateway) to Koyeb using the instructions from [this section of the tutorial](https://koyeb.com/tutorials/deploy-portkey-gateway-to-koyeb-to-streamline-requests-to-200-plus-llms#deploy-the-ai-gateway).
* Sign up for [Groq](https://groq.com/) and copy your API key.
* Sign up for [Together AI](https://www.together.ai/) and copy your API key.

## Deploy the example application

The fastest way to deploy the Portkey Gateway example application to Koyeb is to click the [Deploy to Koyeb button](https://www.koyeb.com/docs/build-and-deploy/deploy-to-koyeb-button) below.

[![Deploy to Koyeb](https://www.koyeb.com/static/images/deploy/button.svg)](https://app.koyeb.com/deploy?name=example-portkey&type=git&repository=koyeb%2Fexample-portkey&branch=main&builder=buildpack&instance_type=nano&env%5BGATEWAY_URL%5D=CHANGE_ME&env%5BGROQ_API_KEY%5D=CHANGE_ME&env%5BTOGETHER_API_KEY%5D=CHANGE_ME&ports=8000%3Bhttp%3B%2F)

On the configuration page, expand the **Environment variables** section and enter the values for your API keys and Portkey Gateway deployment URL (without a trailing slash).

Once the example application is deployed, you can access the web interface by visiting the deployment's public URL.
