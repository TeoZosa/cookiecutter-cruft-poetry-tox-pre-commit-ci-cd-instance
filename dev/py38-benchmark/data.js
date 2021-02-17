window.BENCHMARK_DATA = {
  "lastUpdate": 1613571509729,
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
        "date": 1613571508185,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1052.6168550098478,
            "unit": "iter/sec",
            "range": "stddev: 0.00007883123829446026",
            "extra": "mean: 950.013288539489 usec\nrounds: 506"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1595.5781124659554,
            "unit": "iter/sec",
            "range": "stddev: 0.000022756681610582477",
            "extra": "mean: 626.7320867509937 usec\nrounds: 1268"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11833.104267249526,
            "unit": "iter/sec",
            "range": "stddev: 0.000007275728345991789",
            "extra": "mean: 84.50867814692543 usec\nrounds: 1684"
          }
        ]
      }
    ]
  }
}