window.BENCHMARK_DATA = {
  "lastUpdate": 1601993366250,
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
          "id": "b100859a1e2ff1b89193c2cdbb484c199c56b591",
          "message": "Limit magnitudes of From<FixedDecimal> for PluralOperands to prevent overflow. (#293)",
          "timestamp": "2020-10-06T09:00:53-05:00",
          "tree_id": "c35333acdb2bc40b4c33803746a627f1be729b44",
          "url": "https://github.com/unicode-org/icu4x/commit/b100859a1e2ff1b89193c2cdbb484c199c56b591"
        },
        "date": 1601993365825,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 697,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1187,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 2050,
            "range": "± 234",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 2047,
            "range": "± 41",
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
            "value": 2317,
            "range": "± 334",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2319,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3569,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 5457,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2544,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3425,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 122,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3635,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 7400,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 342,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 128,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 125,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 270,
            "range": "± 7",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}