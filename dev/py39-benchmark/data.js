window.BENCHMARK_DATA = {
  "lastUpdate": 1629208753882,
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
          "id": "ffc1e36c6499246f9fbca81f62e92589d37556c6",
          "message": "Merge pull request #166 from TeoZosa/dependabot/github_actions/actions/setup-node-2.4.0",
          "timestamp": "2021-08-17T13:24:20Z",
          "tree_id": "f2948ca734a7c50c1b95718df2a79591e7aa272b"
        },
        "date": 1629208752044,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 318.39514614565127,
            "unit": "iter/sec",
            "range": "stddev: 0.00003295286945104826",
            "extra": "mean: 3.1407513968273424 msec\nrounds: 126"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 901.1179912348356,
            "unit": "iter/sec",
            "range": "stddev: 0.00002138181638085764",
            "extra": "mean: 1.1097325874380366 msec\nrounds: 812"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1942.2515518672515,
            "unit": "iter/sec",
            "range": "stddev: 0.000014229638068398599",
            "extra": "mean: 514.8663668403894 usec\nrounds: 766"
          }
        ]
      }
    ]
  }
}