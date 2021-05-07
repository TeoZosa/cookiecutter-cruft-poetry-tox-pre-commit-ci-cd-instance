window.BENCHMARK_DATA = {
  "lastUpdate": 1620406534126,
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
        "date": 1620406532454,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 943.8884724706885,
            "unit": "iter/sec",
            "range": "stddev: 0.00014005972038218015",
            "extra": "mean: 1.0594472007719684 msec\nrounds: 518"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1382.5771287870807,
            "unit": "iter/sec",
            "range": "stddev: 0.00011935579869561285",
            "extra": "mean: 723.2869538911647 usec\nrounds: 1388"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8684.200542444054,
            "unit": "iter/sec",
            "range": "stddev: 0.000024794256389433654",
            "extra": "mean: 115.15164753652306 usec\nrounds: 1603"
          }
        ]
      }
    ]
  }
}