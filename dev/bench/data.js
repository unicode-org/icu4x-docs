window.BENCHMARK_DATA = {
  "lastUpdate": 1602021746106,
  "repoUrl": "https://github.com/unicode-org/icu4x",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33847df4571146fb0504febbdb8ddc9e51d06cd2",
          "message": "Adding download and locale filtering options (#299)\n\n- Adding CldrPathsDownload to download CLDR JSON from a zip file\r\n- Adding locales option to FsDataProvider exporter",
          "timestamp": "2020-10-06T16:56:26-05:00",
          "tree_id": "8761d7ebbfb8c6ca18d2c02c79c1a493d1eefb31",
          "url": "https://github.com/unicode-org/icu4x/commit/33847df4571146fb0504febbdb8ddc9e51d06cd2"
        },
        "date": 1602021744087,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 28583,
            "range": "± 939",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 69041,
            "range": "± 2405",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 259,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 127,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 80,
            "range": "± 3",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}