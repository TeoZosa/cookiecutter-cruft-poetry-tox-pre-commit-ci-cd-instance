window.BENCHMARK_DATA = {
  "lastUpdate": 1622640387848,
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
          "id": "d2a5f5c56a6fe1c0b835134c454786d0e109f70b",
          "message": "Merge pull request #197 from TeoZosa/dependabot/pip/hypothesis-6.13.11\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@6051928",
          "timestamp": "2021-06-02T13:19:38Z",
          "tree_id": "789b0ccc4773f83c1c4bc31435d768b771d76695",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/d2a5f5c56a6fe1c0b835134c454786d0e109f70b"
        },
        "date": 1622640386179,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1012.5849604451973,
            "unit": "iter/sec",
            "range": "stddev: 0.000018192727968491038",
            "extra": "mean: 987.5714523355509 usec\nrounds: 535"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1447.718356005163,
            "unit": "iter/sec",
            "range": "stddev: 0.00001753764945836508",
            "extra": "mean: 690.7420879565291 usec\nrounds: 1262"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11121.027301831953,
            "unit": "iter/sec",
            "range": "stddev: 0.000005222642422873348",
            "extra": "mean: 89.91975047442526 usec\nrounds: 1579"
          }
        ]
      }
    ]
  }
}