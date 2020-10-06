window.BENCHMARK_DATA = {
  "lastUpdate": 1602007591323,
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
          "id": "06aecd5931521296bfadf67bbb06d566065c29b6",
          "message": "Move icu_num_utils to utils/num (#303)\n\n* Move icu_num_utils to utils/num\r\n\r\n* Add github action\r\n\r\n* Rename to fixed-decimal\r\n\r\n* Fix a spelling",
          "timestamp": "2020-10-06T10:58:43-07:00",
          "tree_id": "fe427487b8c31ae1173938362e777287827f7928",
          "url": "https://github.com/unicode-org/icu4x/commit/06aecd5931521296bfadf67bbb06d566065c29b6"
        },
        "date": 1602007589271,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 726,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1207,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 2084,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 2083,
            "range": "± 299",
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
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/langid",
            "value": 2369,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2370,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3431,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 5159,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2392,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3129,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 137,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3213,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 6435,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 343,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 110,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 118,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 271,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}