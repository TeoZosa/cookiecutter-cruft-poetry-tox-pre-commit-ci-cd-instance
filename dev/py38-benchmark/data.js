window.BENCHMARK_DATA = {
  "lastUpdate": 1622155569896,
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
          "id": "437be8200590bab78182694ebef8e5060babc661",
          "message": "Merge pull request #188 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-80b238b\n\n⬆️ Bump python from `e4b19f1` to `80b238b` in /{{cookiecutter.project_slug}}\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@471694d",
          "timestamp": "2021-05-27T22:40:17Z",
          "tree_id": "5c4466208ed3ff504c10be049f3591a122d037d9",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/437be8200590bab78182694ebef8e5060babc661"
        },
        "date": 1622155568433,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1261.6732640543814,
            "unit": "iter/sec",
            "range": "stddev: 0.000016705886736050202",
            "extra": "mean: 792.5982332275984 usec\nrounds: 626"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1866.5706216806973,
            "unit": "iter/sec",
            "range": "stddev: 0.000014750351992479258",
            "extra": "mean: 535.7418510635189 usec\nrounds: 1551"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13722.352808759015,
            "unit": "iter/sec",
            "range": "stddev: 0.000005021706050825746",
            "extra": "mean: 72.87380042886649 usec\nrounds: 1864"
          }
        ]
      }
    ]
  }
}