window.BENCHMARK_DATA = {
  "lastUpdate": 1629731604693,
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
          "id": "f7a8de5ac4251588dbff28ad731059ae8e156b8d",
          "message": "Merge pull request #300 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-3.24.3\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@d8ee441",
          "timestamp": "2021-08-23T14:25:03Z",
          "tree_id": "c28dbcd49826b80f791038c9ce3ab54c3c5b7b17"
        },
        "date": 1629731602778,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 272.09666705763146,
            "unit": "iter/sec",
            "range": "stddev: 0.0005651801148870225",
            "extra": "mean: 3.67516445832905 msec\nrounds: 96"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 805.3720425495657,
            "unit": "iter/sec",
            "range": "stddev: 0.0001746211321987368",
            "extra": "mean: 1.2416621724716204 msec\nrounds: 603"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1600.8025834771686,
            "unit": "iter/sec",
            "range": "stddev: 0.00010102628603128123",
            "extra": "mean: 624.6866480111865 usec\nrounds: 679"
          }
        ]
      }
    ]
  }
}