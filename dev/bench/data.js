window.BENCHMARK_DATA = {
  "lastUpdate": 1601534547573,
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
        "date": 1601534546867,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 33765,
            "range": "± 973",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 80466,
            "range": "± 3037",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 281,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 126,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 80,
            "range": "± 3",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}