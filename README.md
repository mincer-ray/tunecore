[heroku]: https://tunecore-db.herokuapp.com/

TuneCore DB Search

[TuneDB Live][heroku]

TuneDB is deployed live on heroku. Be sure to visit the site on both desktop and
mobile devices.

## Features

### Schema and Query

Database is setup with 3 tables for the artists, albums, and songs. When the database
is searched for songs, the 3 tables are joined on their associations and the query
strings are matched to their corresponding columns.

### Frontend

Frontend is built with React and Redux for a single page app consisting of two major
components Search and Results. Search consists of a form element that sends an
ajax request to the rails API with 3 parameters for a query. The response from the
API is sent into the results component as props and triggers a re-render in order
to update the display.

### Seed Data

Seed data is pulled from the free LastFM API. Example API call:

`seeds.rb`
```ruby
artist_releases = JSON.parse(RestClient.get(
  "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums" \
  "&api_key=d1ce08767dd7cb3b5fe7762e6fcb181f" \
  "&artist=#{name}" \
  "&format=json" \
  "&limit=10"
).body)
```

### Tests

Tests for the rails API are done with rspec. Unit tests for the models were
accomplished with the shoulda-matchers gem. Tests for the frontend are written
with enzyme and mocha. There is a single integration test in the features folder
but due to issues with some dependencies it may not run on all machines.

All tests can be run via the script `bash run_tests.sh`

### Mobile

A combination of the viewport tag and a flexbox layout allows the website to have
a natural layout regardless of the device it is being accessed from.
