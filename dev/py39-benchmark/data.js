window.BENCHMARK_DATA = {
  "lastUpdate": 1621651489605,
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
        "date": 1621651488190,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 972.44882947434,
            "unit": "iter/sec",
            "range": "stddev: 0.0001758086174568633",
            "extra": "mean: 1.028331743214245 msec\nrounds: 553"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1394.8965092228052,
            "unit": "iter/sec",
            "range": "stddev: 0.00022515000646111167",
            "extra": "mean: 716.8990626818403 usec\nrounds: 1404"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9027.579970994018,
            "unit": "iter/sec",
            "range": "stddev: 0.0000652123841860926",
            "extra": "mean: 110.771657876534 usec\nrounds: 1631"
          }
        ]
      }
    ]
  }
}