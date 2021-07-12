window.BENCHMARK_DATA = {
  "lastUpdate": 1626097480911,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "52ae5daeaa5f9249424120801670aa7de50fc324",
          "message": "Merge pull request #242 from TeoZosa/dependabot/pip/hypothesis-6.14.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@9a33ae4",
          "timestamp": "2021-07-12T13:34:24Z",
          "tree_id": "043ea874b3dcf350551f6569b30c020f1749cf19"
        },
        "date": 1626097479342,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1236.2324542610088,
            "unit": "iter/sec",
            "range": "stddev: 0.00001626810103092541",
            "extra": "mean: 808.909357259818 usec\nrounds: 613"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1817.1657276910805,
            "unit": "iter/sec",
            "range": "stddev: 0.0000166999767556053",
            "extra": "mean: 550.3075392416825 usec\nrounds: 1478"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14532.153251018397,
            "unit": "iter/sec",
            "range": "stddev: 0.000004448381014066728",
            "extra": "mean: 68.81292694390771 usec\nrounds: 1930"
          }
        ]
      }
    ]
  }
}