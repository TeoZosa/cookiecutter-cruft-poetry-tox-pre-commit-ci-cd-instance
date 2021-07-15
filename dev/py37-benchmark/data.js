window.BENCHMARK_DATA = {
  "lastUpdate": 1626357627816,
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
        "date": 1626357625279,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 980.7907398729023,
            "unit": "iter/sec",
            "range": "stddev: 0.00016451705775547183",
            "extra": "mean: 1.019585482760152 msec\nrounds: 522"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1474.3357666555353,
            "unit": "iter/sec",
            "range": "stddev: 0.00010557872559187055",
            "extra": "mean: 678.2715461542762 usec\nrounds: 1430"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9267.680259610857,
            "unit": "iter/sec",
            "range": "stddev: 0.00002758750963378041",
            "extra": "mean: 107.90186670099787 usec\nrounds: 1898"
          }
        ]
      }
    ]
  }
}