window.BENCHMARK_DATA = {
  "lastUpdate": 1630079388886,
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
          "id": "2a11a88bcd7ef796750140b7b6ab391590dee63c",
          "message": "Merge pull request #190 from TeoZosa/dependabot/github_actions/actions/setup-node-2.4.0",
          "timestamp": "2021-08-27T13:57:13Z",
          "tree_id": "35b1b963754bc31bec5f89ff0801628c46173626"
        },
        "date": 1630079386741,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 295.88208385803125,
            "unit": "iter/sec",
            "range": "stddev: 0.0005635981071552307",
            "extra": "mean: 3.3797247435901365 msec\nrounds: 117"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 861.9862650812794,
            "unit": "iter/sec",
            "range": "stddev: 0.00020061041165239847",
            "extra": "mean: 1.1601112923831878 msec\nrounds: 814"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1790.7528404453992,
            "unit": "iter/sec",
            "range": "stddev: 0.00007635772360810288",
            "extra": "mean: 558.4243550613486 usec\nrounds: 721"
          }
        ]
      }
    ]
  }
}