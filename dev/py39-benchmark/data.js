window.BENCHMARK_DATA = {
  "lastUpdate": 1622208261974,
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
          "id": "d7ea1d8f752e59c8380002a8b0b6a38d6a5ae7d9",
          "message": "Merge pull request #190 from TeoZosa/dependabot/pip/importlib-metadata-4.3.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c7c1631",
          "timestamp": "2021-05-28T13:18:27Z",
          "tree_id": "5a6a814261b70911424013d3e9dfa2787eb8b3fb",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/d7ea1d8f752e59c8380002a8b0b6a38d6a5ae7d9"
        },
        "date": 1622208260520,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1257.484382300236,
            "unit": "iter/sec",
            "range": "stddev: 0.000016312648383041358",
            "extra": "mean: 795.2385048081185 usec\nrounds: 624"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1841.715260528979,
            "unit": "iter/sec",
            "range": "stddev: 0.000014321131641405097",
            "extra": "mean: 542.9720985820463 usec\nrounds: 1552"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14437.89854950322,
            "unit": "iter/sec",
            "range": "stddev: 0.00000594107165591692",
            "extra": "mean: 69.2621572711084 usec\nrounds: 2022"
          }
        ]
      }
    ]
  }
}