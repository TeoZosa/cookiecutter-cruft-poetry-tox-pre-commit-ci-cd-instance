window.BENCHMARK_DATA = {
  "lastUpdate": 1631712986172,
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
          "id": "62ae851d1b31cce8f1b3057725520d295d3c942d",
          "message": "Merge pull request #332 from TeoZosa/dependabot/pip/hypothesis-6.21.3\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@a931845",
          "timestamp": "2021-09-15T13:26:13Z",
          "tree_id": "0ef18f96649e835121996ea91eecc83beec4a7de"
        },
        "date": 1631712983190,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 322.33125475915546,
            "unit": "iter/sec",
            "range": "stddev: 0.00010698000280009755",
            "extra": "mean: 3.1023984960664017 msec\nrounds: 127"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 930.8057835029233,
            "unit": "iter/sec",
            "range": "stddev: 0.000041968332675803865",
            "extra": "mean: 1.0743379743910448 msec\nrounds: 820"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1951.8624702959441,
            "unit": "iter/sec",
            "range": "stddev: 0.000031361269934037904",
            "extra": "mean: 512.3311786656662 usec\nrounds: 750"
          }
        ]
      }
    ]
  }
}