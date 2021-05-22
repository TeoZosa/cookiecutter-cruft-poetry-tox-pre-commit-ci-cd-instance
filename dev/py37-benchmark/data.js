window.BENCHMARK_DATA = {
  "lastUpdate": 1621651440860,
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
        "date": 1621651440020,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1123.9718965071477,
            "unit": "iter/sec",
            "range": "stddev: 0.00005856535723240301",
            "extra": "mean: 889.7019606162729 usec\nrounds: 584"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1627.2152102875348,
            "unit": "iter/sec",
            "range": "stddev: 0.00004922503552502324",
            "extra": "mean: 614.5468612128426 usec\nrounds: 1369"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11387.790558545425,
            "unit": "iter/sec",
            "range": "stddev: 0.0000372987254446713",
            "extra": "mean: 87.81334665920754 usec\nrounds: 1676"
          }
        ]
      }
    ]
  }
}