window.BENCHMARK_DATA = {
  "lastUpdate": 1628866100032,
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
          "id": "7560bba639e012332b1edb621c230abbf73ff5a8",
          "message": "Merge pull request #161 from TeoZosa/dependabot/pip/matplotlib-3.4.3",
          "timestamp": "2021-08-13T14:23:28Z",
          "tree_id": "5b68aff2a4903d69bc27ea12f7cc479963a1489c"
        },
        "date": 1628866098004,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 314.40283760096287,
            "unit": "iter/sec",
            "range": "stddev: 0.000047851683242686684",
            "extra": "mean: 3.180632870970429 msec\nrounds: 124"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 893.4668418261425,
            "unit": "iter/sec",
            "range": "stddev: 0.000022730364374530793",
            "extra": "mean: 1.119235715514765 msec\nrounds: 696"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1940.6788956929313,
            "unit": "iter/sec",
            "range": "stddev: 0.000013992655167613003",
            "extra": "mean: 515.283595972194 usec\nrounds: 745"
          }
        ]
      }
    ]
  }
}