window.BENCHMARK_DATA = {
  "lastUpdate": 1601534659551,
  "repoUrl": "https://github.com/unicode-org/icu4x",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "filmil@gmail.com",
            "name": "Filip Filmar",
            "username": "filmil"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e6579f8c6342fe323641ffb665d3829c0f581d2a",
          "message": "Makes `PluralOperands::n` into a getter (#284)\n\n* Makes `PluralOperands::n` into a getter\r\n\r\nThe field `n` is not used for plural selection, and may cause\r\nprecision loss in cases of conversion.  So we stop keeping in\r\naround and compute it on demand instead.\r\n\r\nFixes #283\r\n\r\n* fixup: simplify eval logic, clean up lint",
          "timestamp": "2020-09-30T23:35:42-07:00",
          "tree_id": "e83a81118db0d8fd82ee8e57e93dffc37c2a5875",
          "url": "https://github.com/unicode-org/icu4x/commit/e6579f8c6342fe323641ffb665d3829c0f581d2a"
        },
        "date": 1601534658834,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 721,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1235,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 2215,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 2157,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/langid",
            "value": 16,
            "range": "± 1",
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
            "value": 2361,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2483,
            "range": "± 258",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3521,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 5469,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2584,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3486,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 117,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3513,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 7059,
            "range": "± 333",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 343,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 125,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 132,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 267,
            "range": "± 16",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}