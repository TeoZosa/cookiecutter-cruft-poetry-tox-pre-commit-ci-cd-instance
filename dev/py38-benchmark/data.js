window.BENCHMARK_DATA = {
  "lastUpdate": 1612200061749,
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
        "date": 1612200060747,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1275.2179528005713,
            "unit": "iter/sec",
            "range": "stddev: 0.000018722121805437862",
            "extra": "mean: 784.1796751714866 usec\nrounds: 588"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1878.6150467181849,
            "unit": "iter/sec",
            "range": "stddev: 0.000016143639628551877",
            "extra": "mean: 532.3070321122644 usec\nrounds: 1557"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14185.236453776668,
            "unit": "iter/sec",
            "range": "stddev: 0.00000556083789328843",
            "extra": "mean: 70.4958287624286 usec\nrounds: 1641"
          }
        ]
      }
    ]
  }
}