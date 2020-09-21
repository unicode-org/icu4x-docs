window.BENCHMARK_DATA = {
  "lastUpdate": 1600722013901,
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
          "id": "b3891597b1e4e0e9e78a1679f0596229957a173b",
          "message": "Add PluralRules example (#249)\n\n* Add PluralRules example\r\n\r\n* Apply feedback",
          "timestamp": "2020-09-21T13:52:22-07:00",
          "tree_id": "69eedd85c39c57e56d3a75a076149489950214da",
          "url": "https://github.com/unicode-org/icu4x/commit/b3891597b1e4e0e9e78a1679f0596229957a173b"
        },
        "date": 1600722013227,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 643,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1058,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 1964,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 1925,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/langid",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/locale",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/langid",
            "value": 2099,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2106,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3129,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 4799,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2223,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3106,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 109,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3114,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 6311,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 300,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 114,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 110,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 237,
            "range": "± 9",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}