window.BENCHMARK_DATA = {
  "lastUpdate": 1600737527056,
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
          "id": "1f08acccfec3fd1800c8fad8fbe43fabb3ffb652",
          "message": "Add example for icu_locale (#250)\n\n* Add example for icu_locale\r\n\r\n* Remodel the app\r\n\r\n* Apply feedback\r\n\r\n* Add a note",
          "timestamp": "2020-09-21T18:10:31-07:00",
          "tree_id": "6c25613f2b6b39d7230fb6c0e2ca821f6ca8c67c",
          "url": "https://github.com/unicode-org/icu4x/commit/1f08acccfec3fd1800c8fad8fbe43fabb3ffb652"
        },
        "date": 1600737526623,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 764,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1238,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 2160,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 2161,
            "range": "± 13",
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
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/langid",
            "value": 2409,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2407,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3649,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 5365,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2516,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3274,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 141,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3361,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 6782,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 357,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 109,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 127,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 282,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}