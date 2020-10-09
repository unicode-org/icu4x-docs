window.BENCHMARK_DATA = {
  "lastUpdate": 1602265163079,
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
          "id": "e0e3dec2353613dc1e41fcb925494b905f64ecbd",
          "message": "Add Unicode Set example (#302)",
          "timestamp": "2020-10-09T12:30:31-05:00",
          "tree_id": "818d2b58edadce125b1e8f540b1100bcfa454e6e",
          "url": "https://github.com/unicode-org/icu4x/commit/e0e3dec2353613dc1e41fcb925494b905f64ecbd"
        },
        "date": 1602265162684,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 628,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1230,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 2268,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 2263,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/langid",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/locale",
            "value": 18,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/langid",
            "value": 2534,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2527,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3892,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 5822,
            "range": "± 333",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2693,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3762,
            "range": "± 393",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 133,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3911,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 8174,
            "range": "± 272",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 369,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 138,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 137,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 275,
            "range": "± 16",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}