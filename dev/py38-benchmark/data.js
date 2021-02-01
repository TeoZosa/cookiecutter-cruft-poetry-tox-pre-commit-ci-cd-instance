window.BENCHMARK_DATA = {
  "lastUpdate": 1612159737304,
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
          "id": "729b80187da2cd5eb1f82fb182d362b93484746a",
          "message": ":sparkles: Add `icontract` benchmarks\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@a22cb4c",
          "timestamp": "2021-02-01T06:05:05Z",
          "tree_id": "c8bdeea48830f9eb909405a8bbf30c1ec082989a",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/729b80187da2cd5eb1f82fb182d362b93484746a"
        },
        "date": 1612159736547,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1283.2316514817276,
            "unit": "iter/sec",
            "range": "stddev: 0.000015747427905604616",
            "extra": "mean: 779.2825238103467 usec\nrounds: 609"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1875.728733638193,
            "unit": "iter/sec",
            "range": "stddev: 0.000015492924160788816",
            "extra": "mean: 533.1261296298342 usec\nrounds: 1566"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 16115.647535540114,
            "unit": "iter/sec",
            "range": "stddev: 0.0000039384046076343164",
            "extra": "mean: 62.051493605496326 usec\nrounds: 2111"
          }
        ]
      }
    ]
  }
}