window.BENCHMARK_DATA = {
  "lastUpdate": 1629294155488,
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
        "date": 1629294153041,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 282.2999598789843,
            "unit": "iter/sec",
            "range": "stddev: 0.0008757957752035739",
            "extra": "mean: 3.542331357144641 msec\nrounds: 126"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 823.4697627496453,
            "unit": "iter/sec",
            "range": "stddev: 0.00024796840271137206",
            "extra": "mean: 1.214373672520656 msec\nrounds: 797"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1671.9383458003792,
            "unit": "iter/sec",
            "range": "stddev: 0.00010462033470107612",
            "extra": "mean: 598.1081793547158 usec\nrounds: 591"
          }
        ]
      }
    ]
  }
}