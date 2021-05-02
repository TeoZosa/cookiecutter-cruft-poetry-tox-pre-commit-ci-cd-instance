window.BENCHMARK_DATA = {
  "lastUpdate": 1619995841191,
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
          "id": "31779f21a839e25b398d88c4eef6948e105f33a0",
          "message": ":bug: Fix `clean-requirements` target\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ccde155",
          "timestamp": "2021-05-02T22:46:42Z",
          "tree_id": "21a57077159b1bb9a45001fec19eaa306be4fa28",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/31779f21a839e25b398d88c4eef6948e105f33a0"
        },
        "date": 1619995840257,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1119.2781551306812,
            "unit": "iter/sec",
            "range": "stddev: 0.00011640741257675096",
            "extra": "mean: 893.4329642869204 usec\nrounds: 476"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1468.835318142028,
            "unit": "iter/sec",
            "range": "stddev: 0.00017163526768821502",
            "extra": "mean: 680.8115162051854 usec\nrounds: 1234"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9242.128316517286,
            "unit": "iter/sec",
            "range": "stddev: 0.00002899346982579413",
            "extra": "mean: 108.20018568805483 usec\nrounds: 2278"
          }
        ]
      }
    ]
  }
}