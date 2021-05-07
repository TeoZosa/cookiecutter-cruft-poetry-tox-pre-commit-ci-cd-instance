window.BENCHMARK_DATA = {
  "lastUpdate": 1620408059175,
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
        "date": 1620408056094,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 900.4194444468958,
            "unit": "iter/sec",
            "range": "stddev: 0.00022684552346282524",
            "extra": "mean: 1.110593519683789 msec\nrounds: 508"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1247.9621922096767,
            "unit": "iter/sec",
            "range": "stddev: 0.00021028475377390596",
            "extra": "mean: 801.306326619857 usec\nrounds: 1142"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8017.277784946779,
            "unit": "iter/sec",
            "range": "stddev: 0.0000287064633834703",
            "extra": "mean: 124.73061640418616 usec\nrounds: 1658"
          }
        ]
      }
    ]
  }
}