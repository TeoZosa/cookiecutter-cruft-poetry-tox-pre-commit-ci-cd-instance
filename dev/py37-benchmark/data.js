window.BENCHMARK_DATA = {
  "lastUpdate": 1627868799805,
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
        "date": 1627868797985,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1325.8787653631045,
            "unit": "iter/sec",
            "range": "stddev: 0.00009104343396426241",
            "extra": "mean: 754.2167701329317 usec\nrounds: 683"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1975.455069793915,
            "unit": "iter/sec",
            "range": "stddev: 0.00006410297928223303",
            "extra": "mean: 506.2124749333442 usec\nrounds: 1516"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 15892.87153746432,
            "unit": "iter/sec",
            "range": "stddev: 0.000010001892539388055",
            "extra": "mean: 62.9212913250256 usec\nrounds: 2190"
          }
        ]
      }
    ]
  }
}