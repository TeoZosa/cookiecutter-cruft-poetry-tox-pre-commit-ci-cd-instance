window.BENCHMARK_DATA = {
  "lastUpdate": 1619809251089,
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
          "id": "9c1f76a003d049d03720a5e43c0948dd92cfdccd",
          "message": "Merge pull request #156 from TeoZosa/dependabot/pip/black-21.4b2\n\n⬆️ Bump black from 21.4b0 to 21.4b2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@14a2971",
          "timestamp": "2021-04-30T18:56:18Z",
          "tree_id": "ced55a97e20d118f686777fba97c50d54b759836",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/9c1f76a003d049d03720a5e43c0948dd92cfdccd"
        },
        "date": 1619809249528,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 960.3840240767091,
            "unit": "iter/sec",
            "range": "stddev: 0.00012536348387029558",
            "extra": "mean: 1.0412501404960133 msec\nrounds: 484"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1294.880305839105,
            "unit": "iter/sec",
            "range": "stddev: 0.00026780410865992",
            "extra": "mean: 772.2721517121095 usec\nrounds: 1081"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9418.48147311475,
            "unit": "iter/sec",
            "range": "stddev: 0.000036907519270609175",
            "extra": "mean: 106.17422807004722 usec\nrounds: 1425"
          }
        ]
      }
    ]
  }
}