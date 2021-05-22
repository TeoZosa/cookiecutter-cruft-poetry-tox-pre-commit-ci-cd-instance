window.BENCHMARK_DATA = {
  "lastUpdate": 1621651409367,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "aaa3fe312141cde790a768c7b96d16ff11b5f852",
          "message": "Merge pull request #175 from TeoZosa/add-docker-container-support\n\n✨ Add Docker Container Functionality and Lifecycle Management Facilities\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1a947d6",
          "timestamp": "2021-05-22T02:37:36Z",
          "tree_id": "343a6bf4b933ea57d2d2e84ccda749fac44d9bdf",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/aaa3fe312141cde790a768c7b96d16ff11b5f852"
        },
        "date": 1621651406724,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1270.3581272528822,
            "unit": "iter/sec",
            "range": "stddev: 0.00009397949249286018",
            "extra": "mean: 787.1795980574982 usec\nrounds: 515"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1785.599199621437,
            "unit": "iter/sec",
            "range": "stddev: 0.00010984924309390469",
            "extra": "mean: 560.0360933248676 usec\nrounds: 1468"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13988.457482448108,
            "unit": "iter/sec",
            "range": "stddev: 0.000013107363383278207",
            "extra": "mean: 71.48751041740957 usec\nrounds: 1632"
          }
        ]
      }
    ]
  }
}