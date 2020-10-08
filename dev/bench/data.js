window.BENCHMARK_DATA = {
  "lastUpdate": 1602189714146,
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
          "id": "1eae2560a2b48329aa5b77968e27b91191ae9183",
          "message": "Add icu-locale macros (#220)\n\n* Add icu-locale macros\r\n\r\n* Add docs and improve langid variants handling in the macro.\r\n\r\n* Apply feedback\r\n\r\n* Specify in docs that we are performing syntax canonicalization.",
          "timestamp": "2020-10-08T13:33:37-07:00",
          "tree_id": "f988ef166aea8f58e8f1ffe281c48e330d3eb367",
          "url": "https://github.com/unicode-org/icu4x/commit/1eae2560a2b48329aa5b77968e27b91191ae9183"
        },
        "date": 1602189713664,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 749,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1199,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 2195,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 2194,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/langid",
            "value": 19,
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
            "value": 2445,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2446,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3621,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 5582,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2556,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3324,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 134,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3374,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 6972,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 355,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 127,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 123,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 283,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}