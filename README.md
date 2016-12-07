# Chat App

A little application allowing users to log in and use a chat room.  Built following a tutorial at
[Feathers](http://feathersjs.com/).

## Setup

* Clone the repo
* `git clone git@github.com:mince27/chat-app.git` OR
* `git clone https://github.com/mince27/chat-app.git`
* Install [Vagrant](https://www.vagrantup.com/) and a provider for it (e.g. [VirtualBox](https://www.virtualbox.org/))
* From the root of the repo run: `vagrant up`
   * This will be a little slow on the first time as it will have to import the base box
   * This file uses NFS which will require elevated privileges.  Feel free to comment out
* `vagrant ssh` to connect to the guest
* `cd /vagrant`
* `npm install`
* `npm run debug`
* The server should be accessible at [http://localhost:3030/](http://localhost:3030/)

If you don't want to use Vagrant just make sure to have Node 6 or later installed.

## Usage

* `npm run jshint` - Runs jshint against the code base
* `npm run debug` - Runs the process through node, logs are written to the terminal.
* `npm run start` - Runs process through [Forever](https://github.com/foreverjs/forever)
  * Logs will be written to <REPO>/out.log and <REPO>/error.log
* `npm run stop` - Stops any node process being run through Forever
* `npm run clearDatabase` - Deletes the users and any stored chat messages.

## Deploying

* By default the app will listen on 3030.  This can be overriden by setting the enviroment variable CHAT_PORT
* By default the host will be localhost.  This can be overriden by setting the enviroment variable CHAT_HOST
