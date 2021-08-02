window.BENCHMARK_DATA = {
  "lastUpdate": 1627868907839,
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
        "date": 1627868905272,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 901.8240770778036,
            "unit": "iter/sec",
            "range": "stddev: 0.00010922647107396608",
            "extra": "mean: 1.1088637190086092 msec\nrounds: 484"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1279.1095359562871,
            "unit": "iter/sec",
            "range": "stddev: 0.00015735368284457333",
            "extra": "mean: 781.7938744803279 usec\nrounds: 964"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8838.746718374083,
            "unit": "iter/sec",
            "range": "stddev: 0.000023736672999380685",
            "extra": "mean: 113.13821199573341 usec\nrounds: 1684"
          }
        ]
      }
    ]
  }
}