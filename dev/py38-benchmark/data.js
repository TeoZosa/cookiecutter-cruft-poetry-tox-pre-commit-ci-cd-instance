window.BENCHMARK_DATA = {
  "lastUpdate": 1613398679860,
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
          "id": "d480f865111ac9b525935525c3e4a5ed12a89989",
          "message": "Merge pull request #72 from TeoZosa/dependabot/pip/myst-parser-0.13.5\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5e0e385",
          "timestamp": "2021-02-15T14:13:36Z",
          "tree_id": "a24b82dba57e6052dcb41f85fe9c0eecbc96a6a9",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/d480f865111ac9b525935525c3e4a5ed12a89989"
        },
        "date": 1613398675877,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1123.9247587991342,
            "unit": "iter/sec",
            "range": "stddev: 0.000021171502369781612",
            "extra": "mean: 889.7392749568552 usec\nrounds: 571"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1652.5947040785559,
            "unit": "iter/sec",
            "range": "stddev: 0.000018225797934105403",
            "extra": "mean: 605.1090430896511 usec\nrounds: 1346"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12064.740980376237,
            "unit": "iter/sec",
            "range": "stddev: 0.000017005734528964698",
            "extra": "mean: 82.88615575141964 usec\nrounds: 1817"
          }
        ]
      }
    ]
  }
}