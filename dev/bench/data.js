window.BENCHMARK_DATA = {
  "lastUpdate": 1600742561250,
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
          "id": "ab00f54f6ce0fd898a6f8a6d70e77a24926a3dcd",
          "message": "Add subset of dates data to DataProvider (#256)\n\n* Add subset of dates data to DataProvider\r\n\r\n* Apply feedback\r\n\r\n* Make some fields mandatory\r\n\r\n* Make StandAlone Widths optional\r\n\r\n* Make short width optional as per UTS 35\r\n\r\n* Readd skipping if short width is none\r\n\r\n* Re-add default to empty values for Invariant",
          "timestamp": "2020-09-21T19:38:12-07:00",
          "tree_id": "2f153a1b7be0f292f81c5eb52d1028935339ebaa",
          "url": "https://github.com/unicode-org/icu4x/commit/ab00f54f6ce0fd898a6f8a6d70e77a24926a3dcd"
        },
        "date": 1600742560840,
        "tool": "cargo",
        "benches": [
          {
            "name": "uniset/contains/best",
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains/worst",
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains_range/best",
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains_range/worst",
            "value": 10,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}