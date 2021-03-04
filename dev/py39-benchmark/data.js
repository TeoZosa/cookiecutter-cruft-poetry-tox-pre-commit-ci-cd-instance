window.BENCHMARK_DATA = {
  "lastUpdate": 1614868109670,
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
        "date": 1614868108113,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1126.3620185255213,
            "unit": "iter/sec",
            "range": "stddev: 0.00005000291475695658",
            "extra": "mean: 887.8140274199435 usec\nrounds: 547"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1632.692935641256,
            "unit": "iter/sec",
            "range": "stddev: 0.000034219282332928696",
            "extra": "mean: 612.4850412286743 usec\nrounds: 1334"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13260.367661964458,
            "unit": "iter/sec",
            "range": "stddev: 0.00000761417946894164",
            "extra": "mean: 75.4126903184112 usec\nrounds: 1818"
          }
        ]
      }
    ]
  }
}