window.BENCHMARK_DATA = {
  "lastUpdate": 1625059833169,
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
          "id": "b16a271432b75e440c02b18891e2af45ba74bc16",
          "message": "Merge pull request #233 from TeoZosa/dependabot/pip/pylint-2.9.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@2cbd8b3",
          "timestamp": "2021-06-30T13:23:52Z",
          "tree_id": "155f62bf3f2570a886a7f27dec53d49fe159c9a5"
        },
        "date": 1625059831473,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1272.5268333526164,
            "unit": "iter/sec",
            "range": "stddev: 0.000017573637104006795",
            "extra": "mean: 785.8380458393843 usec\nrounds: 589"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1889.3647796922178,
            "unit": "iter/sec",
            "range": "stddev: 0.000014902595667466884",
            "extra": "mean: 529.278417142349 usec\nrounds: 1575"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13750.663439099917,
            "unit": "iter/sec",
            "range": "stddev: 0.000004241671093407142",
            "extra": "mean: 72.72376379720754 usec\nrounds: 1812"
          }
        ]
      }
    ]
  }
}