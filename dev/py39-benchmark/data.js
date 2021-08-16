window.BENCHMARK_DATA = {
  "lastUpdate": 1629126167424,
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
          "id": "1f67b2d6997426f3d38e9ded5bd752e0c1f25cb7",
          "message": "Merge pull request #284 from TeoZosa/dependabot/pip/pygments-2.10.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5f2bde9",
          "timestamp": "2021-08-16T14:08:41Z",
          "tree_id": "2d68578a7c684326b3d344aff492e90b1aec7c63"
        },
        "date": 1629126165331,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 285.5145514560191,
            "unit": "iter/sec",
            "range": "stddev: 0.0009541890385548138",
            "extra": "mean: 3.502448456305881 msec\nrounds: 103"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 804.2545690312946,
            "unit": "iter/sec",
            "range": "stddev: 0.0002927735783849036",
            "extra": "mean: 1.2433874030762126 msec\nrounds: 650"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1830.6655045002358,
            "unit": "iter/sec",
            "range": "stddev: 0.00028021665938108046",
            "extra": "mean: 546.2494363616667 usec\nrounds: 880"
          }
        ]
      }
    ]
  }
}