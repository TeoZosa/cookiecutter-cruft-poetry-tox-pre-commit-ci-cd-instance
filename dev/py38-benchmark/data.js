window.BENCHMARK_DATA = {
  "lastUpdate": 1628356377184,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "4860cbf1a89b2a38626249ad29d340f4cbdf6f2e",
          "message": "Merge pull request #273 from TeoZosa/migrate-packaging-from-pure-python-to-mypyc-compiled-platform-specific-packages\n\n📦⚡️Compile Package Modules as C-Extensions via Mypyc\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@2d0fc19",
          "timestamp": "2021-08-07T17:04:27Z",
          "tree_id": "774a8c143244f4c5d15e27898babc9a4902f6b01"
        },
        "date": 1628356374789,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1119.4524576192011,
            "unit": "iter/sec",
            "range": "stddev: 0.00003067790072879588",
            "extra": "mean: 893.2938537888003 usec\nrounds: 554"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1651.9117191794355,
            "unit": "iter/sec",
            "range": "stddev: 0.000028218815211541806",
            "extra": "mean: 605.359226155703 usec\nrounds: 1384"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12206.994912004046,
            "unit": "iter/sec",
            "range": "stddev: 0.0000069891683203617095",
            "extra": "mean: 81.92024386088877 usec\nrounds: 1751"
          }
        ]
      }
    ]
  }
}