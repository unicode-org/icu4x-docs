window.BENCHMARK_DATA = {
  "lastUpdate": 1601666042167,
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
          "id": "256eeeb342faec75c24026bbe65d8dce4bb8caab",
          "message": "Fix name category for one pluralrules test. (#288)",
          "timestamp": "2020-10-02T12:07:10-07:00",
          "tree_id": "fcd3e7b86ca0b35b7549ec00d6fc81d161765b62",
          "url": "https://github.com/unicode-org/icu4x/commit/256eeeb342faec75c24026bbe65d8dce4bb8caab"
        },
        "date": 1601666040078,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 28698,
            "range": "± 2341",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 74403,
            "range": "± 4289",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 252,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 132,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 74,
            "range": "± 5",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}