window.BENCHMARK_DATA = {
  "lastUpdate": 1600737251556,
  "repoUrl": "https://github.com/unicode-org/icu4x",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1f08acccfec3fd1800c8fad8fbe43fabb3ffb652",
          "message": "Add example for icu_locale (#250)\n\n* Add example for icu_locale\r\n\r\n* Remodel the app\r\n\r\n* Apply feedback\r\n\r\n* Add a note",
          "timestamp": "2020-09-21T18:10:31-07:00",
          "tree_id": "6c25613f2b6b39d7230fb6c0e2ca821f6ca8c67c",
          "url": "https://github.com/unicode-org/icu4x/commit/1f08acccfec3fd1800c8fad8fbe43fabb3ffb652"
        },
        "date": 1600737250924,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 23975,
            "range": "± 1325",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 56653,
            "range": "± 2123",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 212,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 121,
            "range": "± 5",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}