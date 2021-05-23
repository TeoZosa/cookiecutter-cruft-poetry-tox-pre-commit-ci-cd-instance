window.BENCHMARK_DATA = {
  "lastUpdate": 1621814154009,
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
          "id": "d924bde2e52a4148cb13fb8b548700b5afb678de",
          "message": "Merge pull request #177 from TeoZosa/add-docker-container-ci-cd-build-push-feature\n\n✨ Add Automated Docker Image CI/CD Build/Push Feature\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@840ccaf",
          "timestamp": "2021-05-23T23:48:24Z",
          "tree_id": "d5ffd375b00ee1544f175e8ea42ce37d2fa1fd90",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/d924bde2e52a4148cb13fb8b548700b5afb678de"
        },
        "date": 1621814152155,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 956.9256987194743,
            "unit": "iter/sec",
            "range": "stddev: 0.0001757200573175978",
            "extra": "mean: 1.045013214022955 msec\nrounds: 542"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1336.0272833749757,
            "unit": "iter/sec",
            "range": "stddev: 0.00013253427523223643",
            "extra": "mean: 748.4877086296262 usec\nrounds: 1263"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9467.728934728899,
            "unit": "iter/sec",
            "range": "stddev: 0.00004141640110252418",
            "extra": "mean: 105.6219508283413 usec\nrounds: 1871"
          }
        ]
      }
    ]
  }
}