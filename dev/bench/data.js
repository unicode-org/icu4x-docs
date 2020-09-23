window.BENCHMARK_DATA = {
  "lastUpdate": 1600833152454,
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
          "id": "2a4da757b524707901028ccf3dd9541878c5d353",
          "message": "Adds Dates support for FsDataProviderExport (based on #258) (#261)\n\n* Add support for Dates to CLDRJsonDataProvider\r\n\r\n* Apply feedback\r\n\r\n* Add Dates to FsDataProviderExport",
          "timestamp": "2020-09-22T20:47:47-07:00",
          "tree_id": "7390c96e541487cb085170d9826ceccda4ae26cb",
          "url": "https://github.com/unicode-org/icu4x/commit/2a4da757b524707901028ccf3dd9541878c5d353"
        },
        "date": 1600833152065,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 32651,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 78033,
            "range": "± 450",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 293,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 166,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}