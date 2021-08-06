window.BENCHMARK_DATA = {
  "lastUpdate": 1628293835122,
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
          "id": "e86321c065ffa8065b9ebf6fbd008987c1198448",
          "message": "Merge pull request #147 from TeoZosa/dependabot/pip/typer-cli-0.0.12",
          "timestamp": "2021-08-06T23:40:27Z",
          "tree_id": "c54c718e02c46654c9bc9965df27b3da7e89690c"
        },
        "date": 1628293832258,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 862.9896545208985,
            "unit": "iter/sec",
            "range": "stddev: 0.00030824247083767025",
            "extra": "mean: 1.1587624425870608 msec\nrounds: 479"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1238.1623004748174,
            "unit": "iter/sec",
            "range": "stddev: 0.00028748173686784546",
            "extra": "mean: 807.6485607876402 usec\nrounds: 1168"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8123.198564675429,
            "unit": "iter/sec",
            "range": "stddev: 0.00006581693996428494",
            "extra": "mean: 123.10421714281411 usec\nrounds: 1575"
          }
        ]
      }
    ]
  }
}