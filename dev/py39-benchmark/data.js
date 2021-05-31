window.BENCHMARK_DATA = {
  "lastUpdate": 1622468384899,
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
          "id": "24f1cca2531a535fe8d4d3d1925fd66c33689859",
          "message": "Merge pull request #193 from TeoZosa/dependabot/pip/hypothesis-6.13.10\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@db48f31",
          "timestamp": "2021-05-31T13:31:19Z",
          "tree_id": "2a581f9c9c650e902233c54e70869ac326eb63f2",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/24f1cca2531a535fe8d4d3d1925fd66c33689859"
        },
        "date": 1622468382912,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 916.3240083355137,
            "unit": "iter/sec",
            "range": "stddev: 0.00020067949824376495",
            "extra": "mean: 1.0913170351352925 msec\nrounds: 370"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1281.9558556953173,
            "unit": "iter/sec",
            "range": "stddev: 0.00013179420958279816",
            "extra": "mean: 780.0580617166511 usec\nrounds: 1037"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9093.757256350782,
            "unit": "iter/sec",
            "range": "stddev: 0.000033013473467043983",
            "extra": "mean: 109.96554799190761 usec\nrounds: 1219"
          }
        ]
      }
    ]
  }
}