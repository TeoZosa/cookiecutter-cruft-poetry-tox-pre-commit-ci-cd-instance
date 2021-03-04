window.BENCHMARK_DATA = {
  "lastUpdate": 1614868168183,
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
          "id": "447c51a2b98cb3a4b500bf2b38eb4961208ceae2",
          "message": "Merge pull request #96 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.1.5\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1d26b58",
          "timestamp": "2021-03-04T14:24:17Z",
          "tree_id": "0ec79250d1c25fd3f042d9506104c7f5abce3dfb",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/447c51a2b98cb3a4b500bf2b38eb4961208ceae2"
        },
        "date": 1614868167220,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 961.7971376306745,
            "unit": "iter/sec",
            "range": "stddev: 0.00035902570697775744",
            "extra": "mean: 1.0397202911868046 msec\nrounds: 522"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1390.5244942339525,
            "unit": "iter/sec",
            "range": "stddev: 0.0001501463300732711",
            "extra": "mean: 719.1530995294733 usec\nrounds: 1276"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9114.750397858605,
            "unit": "iter/sec",
            "range": "stddev: 0.00004718712098298755",
            "extra": "mean: 109.71227475795028 usec\nrounds: 1656"
          }
        ]
      }
    ]
  }
}