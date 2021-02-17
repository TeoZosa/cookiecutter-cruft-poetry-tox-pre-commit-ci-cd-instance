window.BENCHMARK_DATA = {
  "lastUpdate": 1613571490973,
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
        "date": 1613571489656,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1004.4360289448342,
            "unit": "iter/sec",
            "range": "stddev: 0.0002005618103898574",
            "extra": "mean: 995.5835624997499 usec\nrounds: 496"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1419.6211528705862,
            "unit": "iter/sec",
            "range": "stddev: 0.00014974318256234077",
            "extra": "mean: 704.4132851767677 usec\nrounds: 1329"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11903.737447810418,
            "unit": "iter/sec",
            "range": "stddev: 0.000013617637503381924",
            "extra": "mean: 84.00722919035321 usec\nrounds: 1754"
          }
        ]
      }
    ]
  }
}