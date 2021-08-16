window.BENCHMARK_DATA = {
  "lastUpdate": 1629128617820,
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
          "id": "b034fcdb371e5cfefa2ae61207fcfbe62fb438ff",
          "message": "Merge pull request #165 from TeoZosa/dependabot/pip/pygments-2.10.0",
          "timestamp": "2021-08-16T14:50:25Z",
          "tree_id": "a24f62095abb4c26fca4a913c9c6cb3b079b68ed"
        },
        "date": 1629128615618,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 296.8471574513051,
            "unit": "iter/sec",
            "range": "stddev: 0.00034499281515533025",
            "extra": "mean: 3.3687369910693525 msec\nrounds: 112"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 885.6168014776453,
            "unit": "iter/sec",
            "range": "stddev: 0.00013038359709984442",
            "extra": "mean: 1.12915653624853 msec\nrounds: 800"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1811.8451223869722,
            "unit": "iter/sec",
            "range": "stddev: 0.00007795780873903878",
            "extra": "mean: 551.9235544164911 usec\nrounds: 781"
          }
        ]
      }
    ]
  }
}