window.BENCHMARK_DATA = {
  "lastUpdate": 1623111571594,
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
        "date": 1623111570010,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1403.2230628304847,
            "unit": "iter/sec",
            "range": "stddev: 0.000014707827312587162",
            "extra": "mean: 712.6450715418467 usec\nrounds: 629"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 2081.2653591603075,
            "unit": "iter/sec",
            "range": "stddev: 0.000014280227429559804",
            "extra": "mean: 480.4769346679814 usec\nrounds: 1699"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 16647.238298766344,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035649639112066233",
            "extra": "mean: 60.07002375127325 usec\nrounds: 1768"
          }
        ]
      }
    ]
  }
}