window.BENCHMARK_DATA = {
  "lastUpdate": 1602021860976,
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
        "date": 1602021860596,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 711,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1185,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 2051,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 2038,
            "range": "± 426",
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
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/langid",
            "value": 2345,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2346,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3344,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 5103,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2341,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3126,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 136,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3150,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 6389,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 338,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 109,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 117,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 266,
            "range": "± 6",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}