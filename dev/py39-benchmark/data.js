window.BENCHMARK_DATA = {
  "lastUpdate": 1620406510222,
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
          "id": "14843637d097f17289c9e048e6909052cc9e5fa5",
          "message": ":construction_worker: Re-enable `sphinx-icontract` sphinx plugin for docs\n\nRemove resolved TODO.\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f3b2455",
          "timestamp": "2021-05-07T16:51:22Z",
          "tree_id": "52f4d6c03d979bf07def6e6752169f8c3a821255",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/14843637d097f17289c9e048e6909052cc9e5fa5"
        },
        "date": 1620406507137,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1063.4369188060543,
            "unit": "iter/sec",
            "range": "stddev: 0.00013751993472856954",
            "extra": "mean: 940.3472667873177 usec\nrounds: 551"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1557.1717836801256,
            "unit": "iter/sec",
            "range": "stddev: 0.0000940655040263012",
            "extra": "mean: 642.1899051090307 usec\nrounds: 1233"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13271.986542767287,
            "unit": "iter/sec",
            "range": "stddev: 0.000007467575463251134",
            "extra": "mean: 75.34667073219426 usec\nrounds: 1804"
          }
        ]
      }
    ]
  }
}