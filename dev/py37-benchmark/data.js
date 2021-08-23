window.BENCHMARK_DATA = {
  "lastUpdate": 1629732780698,
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
          "id": "2f6b12391c521bbd6465d3b7ce505fc4b3b1255c",
          "message": "Merge pull request #298 from TeoZosa/dependabot/pip/hypothesis-6.15.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@819e0d9",
          "timestamp": "2021-08-23T14:50:14Z",
          "tree_id": "46fdc8d6daa49f6887418293362bf1f2fee06afb"
        },
        "date": 1629732778394,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 304.249941935266,
            "unit": "iter/sec",
            "range": "stddev: 0.0002906999532197406",
            "extra": "mean: 3.2867713750057703 msec\nrounds: 128"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 898.6807804722771,
            "unit": "iter/sec",
            "range": "stddev: 0.00011031218234574341",
            "extra": "mean: 1.112742167997047 msec\nrounds: 875"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1770.6222904456429,
            "unit": "iter/sec",
            "range": "stddev: 0.00009814544857826378",
            "extra": "mean: 564.7731904178801 usec\nrounds: 814"
          }
        ]
      }
    ]
  }
}