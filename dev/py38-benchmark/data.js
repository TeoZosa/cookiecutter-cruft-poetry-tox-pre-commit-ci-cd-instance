window.BENCHMARK_DATA = {
  "lastUpdate": 1621487504316,
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
          "id": "57510490247a21f8d5fa3c7c47d784bada3b8a9c",
          "message": "Merge pull request #173 from TeoZosa/make-package-support-conditionally-included\n\n✨ Make Package Support Conditionally Included\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e25e61f",
          "timestamp": "2021-05-20T05:04:49Z",
          "tree_id": "12f75f85fa33b76e9cd7b5ccd2004a35ec5e4ad3",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/57510490247a21f8d5fa3c7c47d784bada3b8a9c"
        },
        "date": 1621487502312,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1086.1036188084183,
            "unit": "iter/sec",
            "range": "stddev: 0.00002777964962354437",
            "extra": "mean: 920.7224639368351 usec\nrounds: 513"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1623.6637037094233,
            "unit": "iter/sec",
            "range": "stddev: 0.00003526775709256057",
            "extra": "mean: 615.891084905944 usec\nrounds: 1272"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11816.834959287302,
            "unit": "iter/sec",
            "range": "stddev: 0.000005351312384735096",
            "extra": "mean: 84.62502890539754 usec\nrounds: 1626"
          }
        ]
      }
    ]
  }
}