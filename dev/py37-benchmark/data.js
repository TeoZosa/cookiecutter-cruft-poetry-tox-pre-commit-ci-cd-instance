window.BENCHMARK_DATA = {
  "lastUpdate": 1614867682671,
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
        "date": 1614867681581,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1070.6395101110027,
            "unit": "iter/sec",
            "range": "stddev: 0.000016709293768596697",
            "extra": "mean: 934.0211999987944 usec\nrounds: 535"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1527.4303828797342,
            "unit": "iter/sec",
            "range": "stddev: 0.000017643289035179153",
            "extra": "mean: 654.6943227059909 usec\nrounds: 1286"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11331.774500694402,
            "unit": "iter/sec",
            "range": "stddev: 0.000033127855986245653",
            "extra": "mean: 88.24743202741291 usec\nrounds: 1736"
          }
        ]
      }
    ]
  }
}