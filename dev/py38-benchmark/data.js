window.BENCHMARK_DATA = {
  "lastUpdate": 1630936436166,
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
        "date": 1630936433759,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 279.6402040226325,
            "unit": "iter/sec",
            "range": "stddev: 0.000261547673834154",
            "extra": "mean: 3.5760237105214876 msec\nrounds: 114"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 819.4352848091015,
            "unit": "iter/sec",
            "range": "stddev: 0.00018595627378542468",
            "extra": "mean: 1.220352623981726 msec\nrounds: 859"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1595.6686014376946,
            "unit": "iter/sec",
            "range": "stddev: 0.00007779498885247512",
            "extra": "mean: 626.6965453221312 usec\nrounds: 706"
          }
        ]
      }
    ]
  }
}