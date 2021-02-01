window.BENCHMARK_DATA = {
  "lastUpdate": 1612200098347,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "90fd30cc5e53bb2f45199ae51ad7c87a2fb826ea",
          "message": ":sparkles: Add `icontract` benchmarks\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@641456d",
          "timestamp": "2021-02-01T17:17:03Z",
          "tree_id": "c0cb7a8b060842246b63e5d3a91fca67fe6c5b57",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/90fd30cc5e53bb2f45199ae51ad7c87a2fb826ea"
        },
        "date": 1612200097636,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 917.8632473074831,
            "unit": "iter/sec",
            "range": "stddev: 0.00023243449569002874",
            "extra": "mean: 1.0894869175048265 msec\nrounds: 497"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1291.0057355497597,
            "unit": "iter/sec",
            "range": "stddev: 0.00012274837232699673",
            "extra": "mean: 774.5898972123169 usec\nrounds: 1148"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8435.260524636875,
            "unit": "iter/sec",
            "range": "stddev: 0.00006961591250695019",
            "extra": "mean: 118.54998397255176 usec\nrounds: 1435"
          }
        ]
      }
    ]
  }
}