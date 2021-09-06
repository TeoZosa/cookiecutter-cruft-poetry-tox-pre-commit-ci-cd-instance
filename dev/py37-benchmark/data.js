window.BENCHMARK_DATA = {
  "lastUpdate": 1630936501678,
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
          "id": "87270185089487cb4d8883edb048b127617976db",
          "message": "Merge pull request #207 from TeoZosa/dependabot/pip/hypothesis-6.18.0",
          "timestamp": "2021-09-06T13:43:03Z",
          "tree_id": "99f23e82ce5cc9fb687bc5ff14eaad56703e7a18"
        },
        "date": 1630936498579,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 215.89597876168372,
            "unit": "iter/sec",
            "range": "stddev: 0.0007440782708721904",
            "extra": "mean: 4.6318602399901465 msec\nrounds: 100"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 721.5236834885012,
            "unit": "iter/sec",
            "range": "stddev: 0.00021022544182641083",
            "extra": "mean: 1.3859558915170895 msec\nrounds: 507"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1537.4264039748673,
            "unit": "iter/sec",
            "range": "stddev: 0.00005441145627080893",
            "extra": "mean: 650.4376387803648 usec\nrounds: 526"
          }
        ]
      }
    ]
  }
}