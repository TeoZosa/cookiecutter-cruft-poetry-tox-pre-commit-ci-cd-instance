window.BENCHMARK_DATA = {
  "lastUpdate": 1626357588129,
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
          "id": "46ad6918865e72437acce576efd3c4793ade1f1a",
          "message": "Merge pull request #107 from TeoZosa/dependabot/pip/typer-cli-0.0.12",
          "timestamp": "2021-07-15T13:53:46Z",
          "tree_id": "e81b1a55146b52fe4b3f0eece9185474ea233f4a"
        },
        "date": 1626357586085,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1268.6854561049017,
            "unit": "iter/sec",
            "range": "stddev: 0.000017970396037181876",
            "extra": "mean: 788.2174381270078 usec\nrounds: 598"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1870.55186303216,
            "unit": "iter/sec",
            "range": "stddev: 0.0000182995073178947",
            "extra": "mean: 534.6015899174281 usec\nrounds: 1468"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13815.955502927383,
            "unit": "iter/sec",
            "range": "stddev: 0.000004040299853551693",
            "extra": "mean: 72.38008256382382 usec\nrounds: 1732"
          }
        ]
      }
    ]
  }
}