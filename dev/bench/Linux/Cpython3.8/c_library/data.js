window.BENCHMARK_DATA = {
  "lastUpdate": 1633443786682,
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
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "c0bcf09c28a7d4d24a3f083aa0ba3feeb14a5a30",
          "message": "Merge pull request #367 from TeoZosa/dependabot/pip/docs/poetry-1.1.11\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@2787de0",
          "timestamp": "2021-10-05T13:31:31Z",
          "tree_id": "c2f7bfd1ba0e662e7444cfd4e6d4787e4b18128a"
        },
        "date": 1633443782123,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 265.58464253215544,
            "unit": "iter/sec",
            "range": "stddev: 0.00038494042451411614",
            "extra": "mean: 3.765277956081086 msec\nrounds: 296"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 772.626208931227,
            "unit": "iter/sec",
            "range": "stddev: 0.00028535294306054285",
            "extra": "mean: 1.2942869248291473 msec\nrounds: 878"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1511.9549288455062,
            "unit": "iter/sec",
            "range": "stddev: 0.0002900717022592024",
            "extra": "mean: 661.3953768870458 usec\nrounds: 1921"
          }
        ]
      }
    ]
  }
}