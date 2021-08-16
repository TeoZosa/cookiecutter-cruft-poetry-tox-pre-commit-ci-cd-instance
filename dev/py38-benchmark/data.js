window.BENCHMARK_DATA = {
  "lastUpdate": 1629126132925,
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
        "date": 1629126130821,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 273.93597269865097,
            "unit": "iter/sec",
            "range": "stddev: 0.0004003108280416855",
            "extra": "mean: 3.6504880689768737 msec\nrounds: 116"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 841.2220220900605,
            "unit": "iter/sec",
            "range": "stddev: 0.00013233892864459286",
            "extra": "mean: 1.1887468156331038 msec\nrounds: 499"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1692.9553759310134,
            "unit": "iter/sec",
            "range": "stddev: 0.00008634789215620307",
            "extra": "mean: 590.683023437677 usec\nrounds: 640"
          }
        ]
      }
    ]
  }
}