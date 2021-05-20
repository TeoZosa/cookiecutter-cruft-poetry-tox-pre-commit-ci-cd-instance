window.BENCHMARK_DATA = {
  "lastUpdate": 1621487800931,
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
      },
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
          "id": "f5d3fd97def12a5db4e9430da5622e3542046b57",
          "message": ":recycle: Rename `provision_environment` target to `provision-environment`\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@6babf43",
          "timestamp": "2021-05-20T05:08:28Z",
          "tree_id": "112912e95e0da21058f0fe07aac3185334ad02b7",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/f5d3fd97def12a5db4e9430da5622e3542046b57"
        },
        "date": 1621487798826,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 967.0204868616258,
            "unit": "iter/sec",
            "range": "stddev: 0.00021564154293944658",
            "extra": "mean: 1.0341042548595905 msec\nrounds: 463"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1292.7973621882154,
            "unit": "iter/sec",
            "range": "stddev: 0.0003580790766142033",
            "extra": "mean: 773.5164297576996 usec\nrounds: 1203"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8470.85551680032,
            "unit": "iter/sec",
            "range": "stddev: 0.0000659937663494758",
            "extra": "mean: 118.05183054022011 usec\nrounds: 1552"
          }
        ]
      }
    ]
  }
}