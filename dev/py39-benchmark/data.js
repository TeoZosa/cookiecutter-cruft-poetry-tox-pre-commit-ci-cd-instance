window.BENCHMARK_DATA = {
  "lastUpdate": 1622002575393,
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
        "date": 1622002574024,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1261.8246664429096,
            "unit": "iter/sec",
            "range": "stddev: 0.000014183070995933309",
            "extra": "mean: 792.503131848742 usec\nrounds: 584"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1843.9411226347993,
            "unit": "iter/sec",
            "range": "stddev: 0.000014457001290292387",
            "extra": "mean: 542.3166649546296 usec\nrounds: 1558"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14602.809390608347,
            "unit": "iter/sec",
            "range": "stddev: 0.000003870281321363967",
            "extra": "mean: 68.47997349353476 usec\nrounds: 2075"
          }
        ]
      }
    ]
  }
}