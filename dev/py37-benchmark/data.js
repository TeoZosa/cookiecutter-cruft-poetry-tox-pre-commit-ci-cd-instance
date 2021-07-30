window.BENCHMARK_DATA = {
  "lastUpdate": 1627652062717,
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
          "id": "b17fc00b46f0091efb746d6d9ac859207bb43dc3",
          "message": "Merge pull request #141 from TeoZosa/dependabot/github_actions/actions/setup-node-2.3.0",
          "timestamp": "2021-07-30T13:13:57Z",
          "tree_id": "23af09956b6814b080ccbef718583333451d854b"
        },
        "date": 1627652060145,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 898.827023474004,
            "unit": "iter/sec",
            "range": "stddev: 0.00024844749041675034",
            "extra": "mean: 1.1125611200862187 msec\nrounds: 458"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1235.0214823619162,
            "unit": "iter/sec",
            "range": "stddev: 0.0001242612728347311",
            "extra": "mean: 809.7025147186513 usec\nrounds: 1121"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8013.32209922804,
            "unit": "iter/sec",
            "range": "stddev: 0.00003950659083756582",
            "extra": "mean: 124.79218826063845 usec\nrounds: 1397"
          }
        ]
      }
    ]
  }
}