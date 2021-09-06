window.BENCHMARK_DATA = {
  "lastUpdate": 1630936457743,
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
        "date": 1630936455400,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 295.374652880258,
            "unit": "iter/sec",
            "range": "stddev: 0.0005480934416485305",
            "extra": "mean: 3.38553085123858 msec\nrounds: 121"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 846.72033101142,
            "unit": "iter/sec",
            "range": "stddev: 0.0004742613460007939",
            "extra": "mean: 1.181027505038748 msec\nrounds: 794"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1783.5023151289702,
            "unit": "iter/sec",
            "range": "stddev: 0.00030620570418230257",
            "extra": "mean: 560.6945342976396 usec\nrounds: 831"
          }
        ]
      }
    ]
  }
}