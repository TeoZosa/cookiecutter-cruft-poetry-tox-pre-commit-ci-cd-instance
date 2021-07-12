window.BENCHMARK_DATA = {
  "lastUpdate": 1626118840283,
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
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "bac7959f728fcc952b9e63ae994b38826ea890e8",
          "message": "Merge pull request #90 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-3.1.1",
          "timestamp": "2021-07-12T19:33:44Z",
          "tree_id": "6a784932fae859fa12497b763a460938312fcacc"
        },
        "date": 1626118837719,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 926.66434455159,
            "unit": "iter/sec",
            "range": "stddev: 0.0002882460636886744",
            "extra": "mean: 1.0791393948408547 msec\nrounds: 504"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1272.8698372772985,
            "unit": "iter/sec",
            "range": "stddev: 0.0002702915953244297",
            "extra": "mean: 785.626283783286 usec\nrounds: 1258"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8750.786958894872,
            "unit": "iter/sec",
            "range": "stddev: 0.00008977925584125117",
            "extra": "mean: 114.27543656328356 usec\nrounds: 1734"
          }
        ]
      }
    ]
  }
}