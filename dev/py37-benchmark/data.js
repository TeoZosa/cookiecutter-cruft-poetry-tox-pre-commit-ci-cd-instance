window.BENCHMARK_DATA = {
  "lastUpdate": 1623111595686,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "79a8f38a80ef8e1b37d40b87f698513ad89301c2",
          "message": ":green_heart: Temporarily prohibit Codecov upload failures from failing CI\n\nTo address recently flaky Codecov upload jobs failing CI.\n- see: codecov/codecov-action/issues/330\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@d61ef62",
          "timestamp": "2021-06-08T00:13:47Z",
          "tree_id": "7f3032729dfcdcfba7f55152be0c4814c55146b2"
        },
        "date": 1623111594080,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1233.9666030889427,
            "unit": "iter/sec",
            "range": "stddev: 0.00001544014662317312",
            "extra": "mean: 810.3947039544969 usec\nrounds: 581"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1761.0370183204288,
            "unit": "iter/sec",
            "range": "stddev: 0.000014740331099544049",
            "extra": "mean: 567.8472340994512 usec\nrounds: 1525"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13281.278847375193,
            "unit": "iter/sec",
            "range": "stddev: 0.00000506713772469623",
            "extra": "mean: 75.2939541057548 usec\nrounds: 1765"
          }
        ]
      }
    ]
  }
}