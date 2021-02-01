window.BENCHMARK_DATA = {
  "lastUpdate": 1612149879852,
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
          "id": "71722b9d47505c76b486b8abb39118ab7955601e",
          "message": ":sparkles: Add `icontract` benchmarks\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@99e2e17",
          "timestamp": "2021-02-01T03:20:33Z",
          "tree_id": "46eb1296ff38cf6aa85d12d8dd17a5085e790a6c",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/71722b9d47505c76b486b8abb39118ab7955601e"
        },
        "date": 1612149879106,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1150.2835694763173,
            "unit": "iter/sec",
            "range": "stddev: 0.000060113454215726885",
            "extra": "mean: 869.3508509864781 usec\nrounds: 557"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1627.6452131634908,
            "unit": "iter/sec",
            "range": "stddev: 0.000022148873327474847",
            "extra": "mean: 614.3845058570229 usec\nrounds: 1366"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12667.179307342847,
            "unit": "iter/sec",
            "range": "stddev: 0.000007562071646397748",
            "extra": "mean: 78.94417342149131 usec\nrounds: 1678"
          }
        ]
      }
    ]
  }
}