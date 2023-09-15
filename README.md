# README

- `app.py`: server.
- `index.html`:

## Colab only
- `run.py`: run the server on colab

## Not used
- `server.ipynb`: ipynb of `app.py` (mistakenly created but not used.)

## Html files
- `add.html`: `index.html`
- `view.html`: 
- `calendar.html`: 


# Past trials
`new`: use `fullcalendar` by setting src with URL
`new2`: use `fullcalendar` by downloading the two URL files previously and put them to `lib` dir
`new3`: use `fullcalendar` by installing node modules, followed the way of [GitHub Repo Page](https://github.com/fullcalendar/fullcalendar)
`new4`: <u>__finished__</u> implementation of calendar part of calendar page, except for the position of calendar and menu bar etc.
`new5`: integrate something
`new6`: run `new4` on flask server.
`new7`: run `new4` on flask server and after clicking the date, it will print diary content in the alert dial box.

# Test-Repo
## `PageTrans`
### Versions:
- `PageTrans`: read the `index2.html` in `div content`.
- `PageTrans2`: shift to `index2.html` completely through js file (not using server). (Run server of this code does not work well.)

### Run 
```shell
$ http-server
```
in the dir with content where `ls` is like the following:

```
$ ls
index.html  index2.html  script.js
$ http-server
Starting up http-server, serving ./

http-server version: 14.1.1

http-server settings:
CORS: disabled
Cache: 3600 seconds
Connection Timeout: 120 seconds
Directory Listings: visible
AutoIndex: visible
Serve GZIP Files: false
Serve Brotli Files: false
Default File Extension: none

Available on:
  http://127.0.0.1:8080
  http://172.28.217.83:8080
Hit CTRL-C to stop the server
```

# Server
- [Pythonanywhere](https://qiita.com/probabilityhill/items/678f77dc96ccad47c401)
- [render](https://qiita.com/kakiuchis/items/0225664568ece7b7b08b)