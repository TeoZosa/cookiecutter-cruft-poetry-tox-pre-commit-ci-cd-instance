window.BENCHMARK_DATA = {
  "lastUpdate": 1622121964553,
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
          "id": "68274f94374b1f8572cf2f910507a2b0917cd3c3",
          "message": "Merge pull request #187 from TeoZosa/dependabot/pip/importlib-metadata-4.2.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@91fe094",
          "timestamp": "2021-05-27T13:18:47Z",
          "tree_id": "4ff7af7f821cd5b6c8e22a3664dbb88003bd8ba0",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/68274f94374b1f8572cf2f910507a2b0917cd3c3"
        },
        "date": 1622121962152,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1033.2151197268977,
            "unit": "iter/sec",
            "range": "stddev: 0.0003114126490667603",
            "extra": "mean: 967.852658083752 usec\nrounds: 544"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1543.7608234252978,
            "unit": "iter/sec",
            "range": "stddev: 0.00015889846610437895",
            "extra": "mean: 647.7687377641823 usec\nrounds: 1369"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11236.101993647595,
            "unit": "iter/sec",
            "range": "stddev: 0.000045606508298105446",
            "extra": "mean: 88.99883612353793 usec\nrounds: 1672"
          }
        ]
      }
    ]
  }
}