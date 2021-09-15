window.BENCHMARK_DATA = {
  "lastUpdate": 1631712952025,
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
        "date": 1631712949127,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 269.41527030446383,
            "unit": "iter/sec",
            "range": "stddev: 0.0005045386284950006",
            "extra": "mean: 3.711742095649994 msec\nrounds: 115"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 790.3550277052852,
            "unit": "iter/sec",
            "range": "stddev: 0.0003501156113874746",
            "extra": "mean: 1.2652541768518857 msec\nrounds: 769"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1580.0637424873619,
            "unit": "iter/sec",
            "range": "stddev: 0.00018867849377265561",
            "extra": "mean: 632.885859671575 usec\nrounds: 791"
          }
        ]
      }
    ]
  }
}