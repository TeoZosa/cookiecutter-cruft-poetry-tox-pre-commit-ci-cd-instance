window.BENCHMARK_DATA = {
  "lastUpdate": 1629294085027,
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
          "id": "db4e7257f193ba8104b8552a0b02c94ab7972c5a",
          "message": "Merge pull request #171 from TeoZosa/dependabot/github_actions/actions/setup-node-2.4.0",
          "timestamp": "2021-08-18T13:33:10Z",
          "tree_id": "016433cfa425dce1c58d9cc8379371c489812e4f"
        },
        "date": 1629294083075,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 300.6271230856173,
            "unit": "iter/sec",
            "range": "stddev: 0.0002724111866170543",
            "extra": "mean: 3.3263798347137303 msec\nrounds: 121"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 844.2280131790048,
            "unit": "iter/sec",
            "range": "stddev: 0.0003649124456884741",
            "extra": "mean: 1.1845141175005836 msec\nrounds: 800"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1944.4431563456792,
            "unit": "iter/sec",
            "range": "stddev: 0.000021048745158281642",
            "extra": "mean: 514.2860549749196 usec\nrounds: 764"
          }
        ]
      }
    ]
  }
}