window.BENCHMARK_DATA = {
  "lastUpdate": 1600831390638,
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
          "id": "97e53be62ec500175572a4f9588bf2bdfe99e9cd",
          "message": "Adds support for CldrJSONDataProvider for Dates (based on #256) (#258)\n\n* Add support for Dates to CLDRJsonDataProvider\r\n\r\n* Apply feedback",
          "timestamp": "2020-09-22T20:18:24-07:00",
          "tree_id": "92b70d9e32b1bca60515fbc73fa21b4d9c190d28",
          "url": "https://github.com/unicode-org/icu4x/commit/97e53be62ec500175572a4f9588bf2bdfe99e9cd"
        },
        "date": 1600831389959,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 32923,
            "range": "± 463",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 79016,
            "range": "± 2382",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 291,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 167,
            "range": "± 2",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}