window.BENCHMARK_DATA = {
  "lastUpdate": 1622468727266,
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
          "id": "efae57f0bbe215ccced8c1d118b45fb212f7544a",
          "message": "Merge pull request #192 from TeoZosa/dependabot/pip/importlib-metadata-4.3.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@7f13f3e",
          "timestamp": "2021-05-31T13:38:56Z",
          "tree_id": "efa8c7e7dfdce338070b9b013b7a1fc4f77f0730",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/efae57f0bbe215ccced8c1d118b45fb212f7544a"
        },
        "date": 1622468725693,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1069.3058102384693,
            "unit": "iter/sec",
            "range": "stddev: 0.000027547057539020544",
            "extra": "mean: 935.1861651036824 usec\nrounds: 533"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1579.2599653430693,
            "unit": "iter/sec",
            "range": "stddev: 0.000022842154041549918",
            "extra": "mean: 633.2079720533951 usec\nrounds: 1324"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12855.669589163219,
            "unit": "iter/sec",
            "range": "stddev: 0.0000060873515138152685",
            "extra": "mean: 77.78669116099229 usec\nrounds: 1878"
          }
        ]
      }
    ]
  }
}