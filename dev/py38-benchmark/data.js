window.BENCHMARK_DATA = {
  "lastUpdate": 1614867317451,
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
          "id": "43e9e7ee6d128ae50fe873509e7e0c3d9ab0cf45",
          "message": "Merge pull request #94 from TeoZosa/dependabot/pip/docs/poetry-1.1.5\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c715940",
          "timestamp": "2021-03-04T14:10:15Z",
          "tree_id": "2d995e8b84f35a168c5081b8f77f4849762c5312",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/43e9e7ee6d128ae50fe873509e7e0c3d9ab0cf45"
        },
        "date": 1614867316603,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1253.8251895434507,
            "unit": "iter/sec",
            "range": "stddev: 0.000018124249887540867",
            "extra": "mean: 797.5593474590546 usec\nrounds: 590"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1833.9472889266249,
            "unit": "iter/sec",
            "range": "stddev: 0.000015673264109306227",
            "extra": "mean: 545.2719421315982 usec\nrounds: 1417"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13598.24389491205,
            "unit": "iter/sec",
            "range": "stddev: 0.000005142103168564509",
            "extra": "mean: 73.53890750364923 usec\nrounds: 1946"
          }
        ]
      }
    ]
  }
}