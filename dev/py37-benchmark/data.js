window.BENCHMARK_DATA = {
  "lastUpdate": 1630618681579,
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
          "id": "f12bd549d6bf855a7753b86498aa1d5351fbbd70",
          "message": "Merge pull request #313 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-3.9.7-slim\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ef21523",
          "timestamp": "2021-09-02T21:28:50Z",
          "tree_id": "b4de2993b56364473d38f538e8dda2fa398265de"
        },
        "date": 1630618678975,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 303.4468303607162,
            "unit": "iter/sec",
            "range": "stddev: 0.00004116504792236688",
            "extra": "mean: 3.2954702437038823 msec\nrounds: 119"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 874.3441011385677,
            "unit": "iter/sec",
            "range": "stddev: 0.00002108284706520624",
            "extra": "mean: 1.1437144697354322 msec\nrounds: 760"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1825.7255370834505,
            "unit": "iter/sec",
            "range": "stddev: 0.000015133800214306365",
            "extra": "mean: 547.7274539290688 usec\nrounds: 738"
          }
        ]
      }
    ]
  }
}