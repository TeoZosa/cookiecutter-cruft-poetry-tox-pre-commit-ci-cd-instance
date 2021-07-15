window.BENCHMARK_DATA = {
  "lastUpdate": 1626357696138,
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
        "date": 1626357693348,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 794.7058670676432,
            "unit": "iter/sec",
            "range": "stddev: 0.0002550104267354326",
            "extra": "mean: 1.2583271892654628 msec\nrounds: 354"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1062.412430571372,
            "unit": "iter/sec",
            "range": "stddev: 0.0003134729601035054",
            "extra": "mean: 941.2540471332719 usec\nrounds: 785"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 7394.736540497527,
            "unit": "iter/sec",
            "range": "stddev: 0.00009018157351208412",
            "extra": "mean: 135.23132224163308 usec\nrounds: 1713"
          }
        ]
      }
    ]
  }
}