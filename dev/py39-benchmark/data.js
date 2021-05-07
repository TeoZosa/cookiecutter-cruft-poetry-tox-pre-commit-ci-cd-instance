window.BENCHMARK_DATA = {
  "lastUpdate": 1620408034708,
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
        "date": 1620408033501,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1102.9208359352524,
            "unit": "iter/sec",
            "range": "stddev: 0.00003373311779637972",
            "extra": "mean: 906.683387799109 usec\nrounds: 508"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1589.7677782299627,
            "unit": "iter/sec",
            "range": "stddev: 0.000023284997989924502",
            "extra": "mean: 629.0226872715924 usec\nrounds: 1343"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12727.174196558355,
            "unit": "iter/sec",
            "range": "stddev: 0.000007197680711899282",
            "extra": "mean: 78.57203685248663 usec\nrounds: 1791"
          }
        ]
      }
    ]
  }
}