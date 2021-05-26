window.BENCHMARK_DATA = {
  "lastUpdate": 1622002929722,
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
          "id": "15cefb65421319eaecc69d61b67fc02ae55bce21",
          "message": "Merge pull request #181 from TeoZosa/add-semgrep-ci-job\n\n✨ Add Semgrep Static Analysis CI/CD Feature\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@06e71c7",
          "timestamp": "2021-05-26T04:10:33Z",
          "tree_id": "554b859f87de7d5a05a6191d93373f9ea2e0846b",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/15cefb65421319eaecc69d61b67fc02ae55bce21"
        },
        "date": 1622002686836,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 941.3930777237996,
            "unit": "iter/sec",
            "range": "stddev: 0.00012352699402583178",
            "extra": "mean: 1.062255527115099 msec\nrounds: 461"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1276.9901591595792,
            "unit": "iter/sec",
            "range": "stddev: 0.00011292508412942598",
            "extra": "mean: 783.0913909768312 usec\nrounds: 1064"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8440.907307650172,
            "unit": "iter/sec",
            "range": "stddev: 0.00003744666117086467",
            "extra": "mean: 118.47067661715454 usec\nrounds: 1809"
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
          "id": "af0ea896e7970e91bfc363dab7682382184363db",
          "message": ":construction_worker: Update test instance template initialization parameters\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@727b8dd",
          "timestamp": "2021-05-26T04:14:31Z",
          "tree_id": "7abf17b0ea810c60a015d368e7d1ddd9ad6fbdf3",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/af0ea896e7970e91bfc363dab7682382184363db"
        },
        "date": 1622002927691,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 965.5035544001275,
            "unit": "iter/sec",
            "range": "stddev: 0.00022209109607882106",
            "extra": "mean: 1.0357289680008535 msec\nrounds: 500"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1282.277500791863,
            "unit": "iter/sec",
            "range": "stddev: 0.0001841034147603041",
            "extra": "mean: 779.862392799106 usec\nrounds: 1222"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8092.089666254594,
            "unit": "iter/sec",
            "range": "stddev: 0.00006455634816376291",
            "extra": "mean: 123.57747395832402 usec\nrounds: 1344"
          }
        ]
      }
    ]
  }
}