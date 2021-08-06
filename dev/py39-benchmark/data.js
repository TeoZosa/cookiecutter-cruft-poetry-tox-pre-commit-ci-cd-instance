window.BENCHMARK_DATA = {
  "lastUpdate": 1628257500459,
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
          "id": "7b670d96c237ab725d4c34e82cd2834378e8e89c",
          "message": "Merge pull request #150 from TeoZosa/dependabot/github_actions/actions/setup-node-2.4.0",
          "timestamp": "2021-08-06T13:16:20Z",
          "tree_id": "3b7f6e9967e0369726e6823d3c8afe77637ae549"
        },
        "date": 1628257498349,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 929.2278172704531,
            "unit": "iter/sec",
            "range": "stddev: 0.00020911721613888593",
            "extra": "mean: 1.0761623591267806 msec\nrounds: 504"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1355.0962856683548,
            "unit": "iter/sec",
            "range": "stddev: 0.00008519514782664823",
            "extra": "mean: 737.9549413396734 usec\nrounds: 1091"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8213.626623086697,
            "unit": "iter/sec",
            "range": "stddev: 0.00002200187957400358",
            "extra": "mean: 121.74889922427445 usec\nrounds: 1677"
          }
        ]
      }
    ]
  }
}