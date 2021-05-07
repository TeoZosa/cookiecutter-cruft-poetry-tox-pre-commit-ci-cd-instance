window.BENCHMARK_DATA = {
  "lastUpdate": 1620408041073,
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
          "id": "22e2fdf631e5ef38ee9f87cb7433368afa483807",
          "message": ":construction_worker: Re-enable `sphinx-icontract` sphinx plugin for docs\n\nRemove resolved TODO.\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f3b2455",
          "timestamp": "2021-05-07T17:16:20Z",
          "tree_id": "52f4d6c03d979bf07def6e6752169f8c3a821255",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/22e2fdf631e5ef38ee9f87cb7433368afa483807"
        },
        "date": 1620408039413,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 978.3804850035026,
            "unit": "iter/sec",
            "range": "stddev: 0.0002919640641734127",
            "extra": "mean: 1.0220972467540785 msec\nrounds: 154"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1362.5834687495246,
            "unit": "iter/sec",
            "range": "stddev: 0.00023224195184966306",
            "extra": "mean: 733.8999943377589 usec\nrounds: 1413"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8789.916702556104,
            "unit": "iter/sec",
            "range": "stddev: 0.00005780672118979052",
            "extra": "mean: 113.76672087338444 usec\nrounds: 2017"
          }
        ]
      }
    ]
  }
}