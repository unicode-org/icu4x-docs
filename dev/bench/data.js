window.BENCHMARK_DATA = {
  "lastUpdate": 1601534392537,
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
        "date": 1601534392128,
        "tool": "cargo",
        "benches": [
          {
            "name": "uniset/contains/best",
            "value": 11,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains/worst",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains_range/best",
            "value": 12,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uniset/contains_range/worst",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}