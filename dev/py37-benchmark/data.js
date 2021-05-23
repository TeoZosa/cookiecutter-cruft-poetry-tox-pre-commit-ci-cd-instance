window.BENCHMARK_DATA = {
  "lastUpdate": 1621814144108,
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
        "date": 1621814142792,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 903.7506448461811,
            "unit": "iter/sec",
            "range": "stddev: 0.00015552892792035036",
            "extra": "mean: 1.1064999020500845 msec\nrounds: 439"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1245.5180074100533,
            "unit": "iter/sec",
            "range": "stddev: 0.00019284600876853344",
            "extra": "mean: 802.8787974566609 usec\nrounds: 1101"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 7990.241809517185,
            "unit": "iter/sec",
            "range": "stddev: 0.0000331290708707325",
            "extra": "mean: 125.15265793444435 usec\nrounds: 649"
          }
        ]
      }
    ]
  }
}