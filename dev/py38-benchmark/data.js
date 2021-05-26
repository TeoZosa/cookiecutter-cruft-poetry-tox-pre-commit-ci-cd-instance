window.BENCHMARK_DATA = {
  "lastUpdate": 1622002573166,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "15cefb65421319eaecc69d61b67fc02ae55bce21",
          "message": "Merge pull request #181 from TeoZosa/add-semgrep-ci-job\n\n✨ Add Semgrep Static Analysis CI/CD Feature\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@06e71c7",
          "timestamp": "2021-05-26T04:10:33Z",
          "tree_id": "554b859f87de7d5a05a6191d93373f9ea2e0846b",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/15cefb65421319eaecc69d61b67fc02ae55bce21"
        },
        "date": 1622002571741,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1262.0265064744842,
            "unit": "iter/sec",
            "range": "stddev: 0.000016475659078143617",
            "extra": "mean: 792.376384227884 usec\nrounds: 596"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1854.6033616576638,
            "unit": "iter/sec",
            "range": "stddev: 0.00001741947918197832",
            "extra": "mean: 539.1988501013983 usec\nrounds: 1481"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13665.400161031957,
            "unit": "iter/sec",
            "range": "stddev: 0.000005094560817066364",
            "extra": "mean: 73.1775131511761 usec\nrounds: 1863"
          }
        ]
      }
    ]
  }
}