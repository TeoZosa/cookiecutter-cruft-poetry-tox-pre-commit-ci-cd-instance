window.BENCHMARK_DATA = {
  "lastUpdate": 1622048865570,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "3b69ae38472bfb21be63adff92daadc7b8547c36",
          "message": "Merge pull request #183 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-e4b19f1\n\n⬆️ Bump python from `7783d80` to `e4b19f1` in /{{cookiecutter.project_slug}}\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@6fed3de",
          "timestamp": "2021-05-26T17:00:27Z",
          "tree_id": "fbd4703264a674849d9685bc15160fd09c54c1db",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/3b69ae38472bfb21be63adff92daadc7b8547c36"
        },
        "date": 1622048863367,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 955.5425837789969,
            "unit": "iter/sec",
            "range": "stddev: 0.0001924773566336503",
            "extra": "mean: 1.0465258346155355 msec\nrounds: 520"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1332.849029808851,
            "unit": "iter/sec",
            "range": "stddev: 0.0002095849329975029",
            "extra": "mean: 750.2725197192168 usec\nrounds: 1141"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8694.75696575968,
            "unit": "iter/sec",
            "range": "stddev: 0.000029641119206007224",
            "extra": "mean: 115.01184034677937 usec\nrounds: 1616"
          }
        ]
      }
    ]
  }
}