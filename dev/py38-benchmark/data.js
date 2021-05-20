window.BENCHMARK_DATA = {
  "lastUpdate": 1621480004654,
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
        "date": 1621480002993,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1013.7306046742584,
            "unit": "iter/sec",
            "range": "stddev: 0.00022234414133982038",
            "extra": "mean: 986.4553712683161 usec\nrounds: 536"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1423.3305590099142,
            "unit": "iter/sec",
            "range": "stddev: 0.0001556342114596555",
            "extra": "mean: 702.5774818574905 usec\nrounds: 1378"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8456.280477367445,
            "unit": "iter/sec",
            "range": "stddev: 0.00004878618492022336",
            "extra": "mean: 118.25530180513994 usec\nrounds: 1385"
          }
        ]
      }
    ]
  }
}