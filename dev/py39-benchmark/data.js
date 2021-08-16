window.BENCHMARK_DATA = {
  "lastUpdate": 1629127456400,
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
          "id": "f51d9096172e63e48ea3fc148ccf8a1519cd316a",
          "message": "Merge pull request #285 from TeoZosa/dependabot/pip/importlib-metadata-4.6.4\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@04d23f8",
          "timestamp": "2021-08-16T14:41:15Z",
          "tree_id": "a24f62095abb4c26fca4a913c9c6cb3b079b68ed"
        },
        "date": 1629127277958,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 290.76527464015885,
            "unit": "iter/sec",
            "range": "stddev: 0.00032611120521266183",
            "extra": "mean: 3.4392002320000756 msec\nrounds: 125"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 872.8460489299397,
            "unit": "iter/sec",
            "range": "stddev: 0.0001501817441985674",
            "extra": "mean: 1.1456774092360777 msec\nrounds: 628"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1679.6950587400963,
            "unit": "iter/sec",
            "range": "stddev: 0.000088390284561094",
            "extra": "mean: 595.3461580997201 usec\nrounds: 759"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "0174118eea685e1cf21a721e5c5623e51aa0b61f",
          "message": "Merge pull request #163 from TeoZosa/dependabot/pip/hypothesis-6.14.7",
          "timestamp": "2021-08-16T14:00:47Z",
          "tree_id": "0c11a3eb1bbb522902f8b326ef2ef1bcbc59c25d"
        },
        "date": 1629127454023,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 298.60641944898873,
            "unit": "iter/sec",
            "range": "stddev: 0.00044365009559487427",
            "extra": "mean: 3.348889825762206 msec\nrounds: 132"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 887.1888350698847,
            "unit": "iter/sec",
            "range": "stddev: 0.00010609160220462545",
            "extra": "mean: 1.1271557536240062 msec\nrounds: 828"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1773.7421636463328,
            "unit": "iter/sec",
            "range": "stddev: 0.00004105194912529419",
            "extra": "mean: 563.7797987190378 usec\nrounds: 780"
          }
        ]
      }
    ]
  }
}