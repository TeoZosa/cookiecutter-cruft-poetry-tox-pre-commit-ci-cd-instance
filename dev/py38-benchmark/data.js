window.BENCHMARK_DATA = {
  "lastUpdate": 1627868873551,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "9d2989e32e22709cf3161b00f36ce3434c3a8eef",
          "message": "Merge pull request #255 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-5f8d373\n\n⬆️ Bump python from `7bc4014` to `5f8d373` in /{{cookiecutter.project_slug}}\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@3b62ecd",
          "timestamp": "2021-08-02T01:38:22Z",
          "tree_id": "14662acb947d8cedce10585c5bc564867ed45676"
        },
        "date": 1627868871445,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 996.0725870829626,
            "unit": "iter/sec",
            "range": "stddev: 0.00017966792079509788",
            "extra": "mean: 1.003942898306778 msec\nrounds: 531"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1614.5701475903375,
            "unit": "iter/sec",
            "range": "stddev: 0.000026491817919781852",
            "extra": "mean: 619.3598968074867 usec\nrounds: 1347"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12120.161578656527,
            "unit": "iter/sec",
            "range": "stddev: 0.0000070701468921980775",
            "extra": "mean: 82.50715087503363 usec\nrounds: 1657"
          }
        ]
      }
    ]
  }
}