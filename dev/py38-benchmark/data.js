window.BENCHMARK_DATA = {
  "lastUpdate": 1614867648773,
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
          "id": "39939f288e490f132b06f0ee1b63d3f4fa44a73b",
          "message": "Merge pull request #97 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/poetry-1.1.5\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@316fbaa",
          "timestamp": "2021-03-04T14:16:39Z",
          "tree_id": "6ba7cb782aff6e765857b4eae91f6ec37fb62fbf",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/39939f288e490f132b06f0ee1b63d3f4fa44a73b"
        },
        "date": 1614867647787,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1140.209866220155,
            "unit": "iter/sec",
            "range": "stddev: 0.00011890393091612874",
            "extra": "mean: 877.0315269372675 usec\nrounds: 594"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1557.0338651457562,
            "unit": "iter/sec",
            "range": "stddev: 0.00009263574980489742",
            "extra": "mean: 642.2467888367917 usec\nrounds: 1487"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10025.89754513398,
            "unit": "iter/sec",
            "range": "stddev: 0.000034408291500759694",
            "extra": "mean: 99.7416934990868 usec\nrounds: 2261"
          }
        ]
      }
    ]
  }
}