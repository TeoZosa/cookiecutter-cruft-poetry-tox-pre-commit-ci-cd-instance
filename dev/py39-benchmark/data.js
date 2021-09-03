window.BENCHMARK_DATA = {
  "lastUpdate": 1630698657113,
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
          "id": "445b2d89a66356f95bd6d739b192d62ce7326d49",
          "message": "Merge pull request #198 from TeoZosa/dependabot/github_actions/codecov/codecov-action-2.0.3",
          "timestamp": "2021-09-03T19:41:47Z",
          "tree_id": "eebc56d0b650d101e4210ff516b2d3e30f0d3bdd"
        },
        "date": 1630698654732,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 367.53811346318906,
            "unit": "iter/sec",
            "range": "stddev: 0.00008803634705247012",
            "extra": "mean: 2.720806260274162 msec\nrounds: 146"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1041.7443340652183,
            "unit": "iter/sec",
            "range": "stddev: 0.00003638261190463334",
            "extra": "mean: 959.9284270620235 usec\nrounds: 946"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2282.080289813605,
            "unit": "iter/sec",
            "range": "stddev: 0.000010922426947909074",
            "extra": "mean: 438.196677156209 usec\nrounds: 858"
          }
        ]
      }
    ]
  }
}