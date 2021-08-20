window.BENCHMARK_DATA = {
  "lastUpdate": 1629476783385,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "12785a76f60117e8b0dbc2a43e0db7d647e063e9",
          "message": "Merge pull request #295 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/poetry-1.1.8\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e2baf71",
          "timestamp": "2021-08-20T15:27:15Z",
          "tree_id": "486d2eea2e0740cef0502bf9004ee910301efc77"
        },
        "date": 1629476523701,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 312.099798078295,
            "unit": "iter/sec",
            "range": "stddev: 0.00004062350886674131",
            "extra": "mean: 3.2041033225825246 msec\nrounds: 124"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 911.1662847720345,
            "unit": "iter/sec",
            "range": "stddev: 0.00002050093598676137",
            "extra": "mean: 1.097494515230215 msec\nrounds: 788"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1869.6645816161586,
            "unit": "iter/sec",
            "range": "stddev: 0.000013188293442491238",
            "extra": "mean: 534.8552942772168 usec\nrounds: 734"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "2bc28f58ce1f7a165fbbae6bfcc42b441091848e",
          "message": "Merge pull request #179 from TeoZosa/dependabot/pip/hypothesis-6.14.9",
          "timestamp": "2021-08-20T14:55:31Z",
          "tree_id": "7ba428a6b3e0af78ff6ec7d85edcf4189a20a570"
        },
        "date": 1629476780343,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 279.1388134011995,
            "unit": "iter/sec",
            "range": "stddev: 0.00025850226172211476",
            "extra": "mean: 3.582446983331996 msec\nrounds: 120"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 814.7945804467954,
            "unit": "iter/sec",
            "range": "stddev: 0.00015683494782681254",
            "extra": "mean: 1.227303205001249 msec\nrounds: 800"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1646.1932929064387,
            "unit": "iter/sec",
            "range": "stddev: 0.0000842283336805401",
            "extra": "mean: 607.4620789120388 usec\nrounds: 735"
          }
        ]
      }
    ]
  }
}