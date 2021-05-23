window.BENCHMARK_DATA = {
  "lastUpdate": 1621814074164,
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
        "date": 1621814072554,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1254.650580257341,
            "unit": "iter/sec",
            "range": "stddev: 0.00009044030799817827",
            "extra": "mean: 797.0346610726392 usec\nrounds: 596"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1843.8470908033069,
            "unit": "iter/sec",
            "range": "stddev: 0.00006877125936957753",
            "extra": "mean: 542.3443218191868 usec\nrounds: 1650"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14094.987500522066,
            "unit": "iter/sec",
            "range": "stddev: 0.000011460029557235164",
            "extra": "mean: 70.94720729358299 usec\nrounds: 2002"
          }
        ]
      }
    ]
  }
}