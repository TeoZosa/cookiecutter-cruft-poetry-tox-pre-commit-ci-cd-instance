window.BENCHMARK_DATA = {
  "lastUpdate": 1628525606479,
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
          "id": "80a3399a43d0350086869732a631d55edd86ba5a",
          "message": "Merge pull request #277 from TeoZosa/dependabot/pip/types-emoji-1.2.4\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@cd1c029",
          "timestamp": "2021-08-09T14:47:42Z",
          "tree_id": "5057d2690c13afd0460c968fa589b0c3e1efbcfd"
        },
        "date": 1628525604455,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 353.93973716458726,
            "unit": "iter/sec",
            "range": "stddev: 0.000037545597532688206",
            "extra": "mean: 2.8253397259403656 msec\nrounds: 135"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1020.7893176701513,
            "unit": "iter/sec",
            "range": "stddev: 0.000019637240824590574",
            "extra": "mean: 979.6340759936626 usec\nrounds: 921"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2135.1248405860492,
            "unit": "iter/sec",
            "range": "stddev: 0.000010707619926384953",
            "extra": "mean: 468.3566885604309 usec\nrounds: 822"
          }
        ]
      }
    ]
  }
}