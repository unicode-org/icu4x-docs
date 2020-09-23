window.BENCHMARK_DATA = {
  "lastUpdate": 1600833359293,
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
        "date": 1600833358909,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 724,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1197,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 2161,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 2145,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/langid",
            "value": 17,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/locale",
            "value": 17,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/langid",
            "value": 2314,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2332,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3683,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 5479,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2568,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3472,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 120,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3559,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 7253,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 344,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 122,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 126,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 271,
            "range": "± 5",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}