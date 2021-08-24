window.BENCHMARK_DATA = {
  "lastUpdate": 1629812945338,
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
          "id": "b0c1f58857d9b755ff431709cc56820b2d1a65a7",
          "message": "Merge pull request #185 from TeoZosa/dependabot/github_actions/actions/setup-node-2.4.0",
          "timestamp": "2021-08-24T13:34:59Z",
          "tree_id": "59fe788aa6e6c8300de1eccb0996090693a43b9e"
        },
        "date": 1629812943267,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 421.83265423772474,
            "unit": "iter/sec",
            "range": "stddev: 0.000028522934448231113",
            "extra": "mean: 2.37060832051292 msec\nrounds: 156"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1186.5676869450056,
            "unit": "iter/sec",
            "range": "stddev: 0.00025453702952074614",
            "extra": "mean: 842.7669242996566 usec\nrounds: 1070"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2580.2561372137407,
            "unit": "iter/sec",
            "range": "stddev: 0.000010808761853700224",
            "extra": "mean: 387.558423203612 usec\nrounds: 905"
          }
        ]
      }
    ]
  }
}