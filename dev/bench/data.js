window.BENCHMARK_DATA = {
  "lastUpdate": 1602265889423,
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
          "id": "0f7661f692fb6acea4363e4159032497323ed8dd",
          "message": "Adding more languages to testdata. (#313)",
          "timestamp": "2020-10-09T12:44:37-05:00",
          "tree_id": "99223729152d0ae5239e352cf3d5267a7bc08929",
          "url": "https://github.com/unicode-org/icu4x/commit/0f7661f692fb6acea4363e4159032497323ed8dd"
        },
        "date": 1602265888726,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 32089,
            "range": "± 1824",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 78213,
            "range": "± 6489",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 295,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 136,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 88,
            "range": "± 7",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}