window.BENCHMARK_DATA = {
  "lastUpdate": 1613571506432,
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
          "id": "2e1598dc0c60b68da88da1757ce75f90f52139d0",
          "message": "Merge pull request #75 from TeoZosa/dependabot/pip/sphinx-3.5.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f5c0091",
          "timestamp": "2021-02-17T14:13:26Z",
          "tree_id": "0b3d8179b7f406423b3a74dd1abeb2489399b4a5",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/2e1598dc0c60b68da88da1757ce75f90f52139d0"
        },
        "date": 1613571505061,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 945.5864987048992,
            "unit": "iter/sec",
            "range": "stddev: 0.00014905236927257665",
            "extra": "mean: 1.0575447104729467 msec\nrounds: 487"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1361.5211028176689,
            "unit": "iter/sec",
            "range": "stddev: 0.00011133768601331307",
            "extra": "mean: 734.4726408797478 usec\nrounds: 1228"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8782.71406728019,
            "unit": "iter/sec",
            "range": "stddev: 0.00006334782603464588",
            "extra": "mean: 113.86002007346205 usec\nrounds: 1644"
          }
        ]
      }
    ]
  }
}