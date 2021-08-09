window.BENCHMARK_DATA = {
  "lastUpdate": 1628523371794,
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
          "id": "e44e16099c9e1802bb70ff52714be679f038b772",
          "message": "Merge pull request #279 from TeoZosa/dependabot/pip/xdoctest-0.15.6\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1fafbc7",
          "timestamp": "2021-08-09T14:24:42Z",
          "tree_id": "a279f11385946797c7bcc1a2c68450edb94ff8f0"
        },
        "date": 1628523369698,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 412.5292015138213,
            "unit": "iter/sec",
            "range": "stddev: 0.00004987790150452669",
            "extra": "mean: 2.424070820514984 msec\nrounds: 156"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1201.3630851796438,
            "unit": "iter/sec",
            "range": "stddev: 0.000015538740451331914",
            "extra": "mean: 832.3878204152301 usec\nrounds: 1058"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2494.1113281284242,
            "unit": "iter/sec",
            "range": "stddev: 0.000011287236929384495",
            "extra": "mean: 400.9444120324805 usec\nrounds: 881"
          }
        ]
      }
    ]
  }
}