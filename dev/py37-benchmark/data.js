window.BENCHMARK_DATA = {
  "lastUpdate": 1613399571094,
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
          "id": "6877aca931f336d313425657aefc3a575c182348",
          "message": "Merge pull request #65 from TeoZosa/dependabot/pip/dot-github/workflows/pre-commit-2.10.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@bbe7ba7",
          "timestamp": "2021-02-15T14:27:27Z",
          "tree_id": "3b2edabf1248ca0cd37fc6b16075f4fda85cb765",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/6877aca931f336d313425657aefc3a575c182348"
        },
        "date": 1613399569727,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 820.8952987188225,
            "unit": "iter/sec",
            "range": "stddev: 0.0005305944710335733",
            "extra": "mean: 1.2181821500996626 msec\nrounds: 513"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1155.8286761531172,
            "unit": "iter/sec",
            "range": "stddev: 0.0003089264491653172",
            "extra": "mean: 865.1801262867491 usec\nrounds: 1069"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 7973.744678010117,
            "unit": "iter/sec",
            "range": "stddev: 0.00006735973707806865",
            "extra": "mean: 125.41159021027927 usec\nrounds: 1757"
          }
        ]
      }
    ]
  }
}