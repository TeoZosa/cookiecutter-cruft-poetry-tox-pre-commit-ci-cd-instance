window.BENCHMARK_DATA = {
  "lastUpdate": 1628257485197,
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
        "date": 1628257482655,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 979.7253831547715,
            "unit": "iter/sec",
            "range": "stddev: 0.00024034373042712117",
            "extra": "mean: 1.020694183486339 msec\nrounds: 545"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1433.4289518676687,
            "unit": "iter/sec",
            "range": "stddev: 0.00016870929668645122",
            "extra": "mean: 697.6278794265054 usec\nrounds: 1186"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9392.173487162023,
            "unit": "iter/sec",
            "range": "stddev: 0.000041164454197226434",
            "extra": "mean: 106.4716278257509 usec\nrounds: 1416"
          }
        ]
      }
    ]
  }
}