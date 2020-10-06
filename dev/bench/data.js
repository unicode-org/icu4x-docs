window.BENCHMARK_DATA = {
  "lastUpdate": 1602011797854,
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
          "id": "6d6bcea21678159d29f26c5bd02bb9ce420001b4",
          "message": "Rename DummyDateTime to MockDateTime (#301)",
          "timestamp": "2020-10-06T12:07:56-07:00",
          "tree_id": "36cc98d8a7b2070c26e35fe8b3f68d59f10d2a09",
          "url": "https://github.com/unicode-org/icu4x/commit/6d6bcea21678159d29f26c5bd02bb9ce420001b4"
        },
        "date": 1602011797115,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 676,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1161,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 2131,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 2132,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/langid",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/locale",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/langid",
            "value": 2342,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2347,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3578,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 5370,
            "range": "± 283",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2552,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3537,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 124,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3649,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 7421,
            "range": "± 668",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 339,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 125,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 122,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 265,
            "range": "± 10",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}