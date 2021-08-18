window.BENCHMARK_DATA = {
  "lastUpdate": 1629294192014,
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
        "date": 1629294189345,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 248.75055209566773,
            "unit": "iter/sec",
            "range": "stddev: 0.0004851296276277351",
            "extra": "mean: 4.020091579999416 msec\nrounds: 100"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 773.691187835353,
            "unit": "iter/sec",
            "range": "stddev: 0.00016403128981487018",
            "extra": "mean: 1.2925053506138768 msec\nrounds: 733"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1528.1406790180051,
            "unit": "iter/sec",
            "range": "stddev: 0.00008761014569432192",
            "extra": "mean: 654.3900137797572 usec\nrounds: 653"
          }
        ]
      }
    ]
  }
}