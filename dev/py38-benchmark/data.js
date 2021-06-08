window.BENCHMARK_DATA = {
  "lastUpdate": 1623111654208,
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
        "date": 1623111652429,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 934.0410107065854,
            "unit": "iter/sec",
            "range": "stddev: 0.00008806272055804216",
            "extra": "mean: 1.0706168021932116 msec\nrounds: 369"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1304.3088698139293,
            "unit": "iter/sec",
            "range": "stddev: 0.0002055715310637639",
            "extra": "mean: 766.6895649821491 usec\nrounds: 1131"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 7951.119435145118,
            "unit": "iter/sec",
            "range": "stddev: 0.00007159100282580856",
            "extra": "mean: 125.76845413487978 usec\nrounds: 1515"
          }
        ]
      }
    ]
  }
}