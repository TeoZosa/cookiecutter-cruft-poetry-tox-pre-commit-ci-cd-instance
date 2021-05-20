window.BENCHMARK_DATA = {
  "lastUpdate": 1621479950446,
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
          "id": "5475ce08315c801da5f9a2a9206ae96d2a6714cd",
          "message": "Merge pull request #172 from TeoZosa/make-jupyter-support-conditionally-included\n\n✨ Make Jupyter Support Conditionally Included\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@2b9c5f6",
          "timestamp": "2021-05-20T02:59:41Z",
          "tree_id": "fb9cde82a6b0546821017b479f0d1e06bf6ef33f",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/5475ce08315c801da5f9a2a9206ae96d2a6714cd"
        },
        "date": 1621479948565,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1197.1280206349547,
            "unit": "iter/sec",
            "range": "stddev: 0.00008760457943583717",
            "extra": "mean: 835.3325482011537 usec\nrounds: 695"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1730.8260472868637,
            "unit": "iter/sec",
            "range": "stddev: 0.00018762714726234796",
            "extra": "mean: 577.7588115036392 usec\nrounds: 1443"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13038.346044984113,
            "unit": "iter/sec",
            "range": "stddev: 0.000011060699337847002",
            "extra": "mean: 76.69684456524321 usec\nrounds: 1647"
          }
        ]
      }
    ]
  }
}