window.BENCHMARK_DATA = {
  "lastUpdate": 1602265175474,
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
          "id": "98f89ff9735a08379ef34d8c56d14e7aaddbf084",
          "message": "Reorder constructor arguments in PluralRules to align with DateTimeFormat. (#305)",
          "timestamp": "2020-10-09T12:32:47-05:00",
          "tree_id": "e8ae0451070d5049e6e4f1c15ae5d3ada78371e3",
          "url": "https://github.com/unicode-org/icu4x/commit/98f89ff9735a08379ef34d8c56d14e7aaddbf084"
        },
        "date": 1602265173387,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 30481,
            "range": "± 1990",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 69562,
            "range": "± 6173",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 264,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 125,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 80,
            "range": "± 13",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}