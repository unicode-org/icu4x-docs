window.BENCHMARK_DATA = {
  "lastUpdate": 1602021606867,
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
        "date": 1602021606505,
        "tool": "cargo",
        "benches": [
          {
            "name": "uniset/contains/best",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains/worst",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains_range/best",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains_range/worst",
            "value": 8,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}