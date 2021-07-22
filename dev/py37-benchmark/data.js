window.BENCHMARK_DATA = {
  "lastUpdate": 1626961191883,
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
          "id": "1adfaba3a5d15108da9c4edc154e849563047d5a",
          "message": "Merge pull request #123 from TeoZosa/dependabot/github_actions/actions/setup-node-2.3.0",
          "timestamp": "2021-07-22T13:30:29Z",
          "tree_id": "dbb705d7e41784d6f6a7ff93527bc2b2746923fd"
        },
        "date": 1626961190311,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 919.2097402294866,
            "unit": "iter/sec",
            "range": "stddev: 0.00034487954983957304",
            "extra": "mean: 1.0878909961836825 msec\nrounds: 524"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1281.0309687378374,
            "unit": "iter/sec",
            "range": "stddev: 0.00028426253351589284",
            "extra": "mean: 780.6212530406434 usec\nrounds: 1233"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 7934.976848978408,
            "unit": "iter/sec",
            "range": "stddev: 0.0000783960635968671",
            "extra": "mean: 126.02431223586308 usec\nrounds: 1659"
          }
        ]
      }
    ]
  }
}