window.BENCHMARK_DATA = {
  "lastUpdate": 1600831372713,
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
        "date": 1600831371955,
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
            "value": 11,
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
            "value": 11,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}