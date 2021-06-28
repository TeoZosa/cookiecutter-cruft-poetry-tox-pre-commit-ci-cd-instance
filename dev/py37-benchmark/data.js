window.BENCHMARK_DATA = {
  "lastUpdate": 1624890138634,
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
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "3079c924eb715e2d19da46d374b8a039af044481",
          "message": "Merge pull request #84 from TeoZosa/dependabot/pip/xdoctest-0.15.5",
          "timestamp": "2021-06-28T13:44:34Z",
          "tree_id": "eab4be3d6b6de37731be665022cda06c0af373fe"
        },
        "date": 1624890136485,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1121.3002942240066,
            "unit": "iter/sec",
            "range": "stddev: 0.0001461747905166854",
            "extra": "mean: 891.8217583203683 usec\nrounds: 571"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1495.9421038312391,
            "unit": "iter/sec",
            "range": "stddev: 0.00013831494945387888",
            "extra": "mean: 668.4750682789876 usec\nrounds: 1406"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10201.803101054576,
            "unit": "iter/sec",
            "range": "stddev: 0.000022727527562533255",
            "extra": "mean: 98.02188790495559 usec\nrounds: 2034"
          }
        ]
      }
    ]
  }
}