window.BENCHMARK_DATA = {
  "lastUpdate": 1613399182023,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "8178f1fafaf7a6405ff988f7fe911fcd9976ab48",
          "message": "Merge pull request #66 from TeoZosa/dependabot/pip/pre-commit-2.10.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1f26a28",
          "timestamp": "2021-02-15T14:21:24Z",
          "tree_id": "01df230fbdbf2317b3d8566a818581094b361e37",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/8178f1fafaf7a6405ff988f7fe911fcd9976ab48"
        },
        "date": 1613399180867,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 897.5799685712542,
            "unit": "iter/sec",
            "range": "stddev: 0.00016047351606029935",
            "extra": "mean: 1.1141068595723849 msec\nrounds: 470"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1305.8816303090975,
            "unit": "iter/sec",
            "range": "stddev: 0.00010288149201732693",
            "extra": "mean: 765.7661895154338 usec\nrounds: 1240"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9154.72180152569,
            "unit": "iter/sec",
            "range": "stddev: 0.00004104822118172823",
            "extra": "mean: 109.23324833675929 usec\nrounds: 1804"
          }
        ]
      }
    ]
  }
}