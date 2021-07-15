window.BENCHMARK_DATA = {
  "lastUpdate": 1626357230276,
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
          "id": "5d7b384411a8ad1057ab69b3563fde32ba06de39",
          "message": "Merge pull request #105 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-3.1.1",
          "timestamp": "2021-07-15T13:15:52Z",
          "tree_id": "3c91c377c7b2f1b91592038aa89f5ff5f6db2a77"
        },
        "date": 1626357228459,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1237.1765939994589,
            "unit": "iter/sec",
            "range": "stddev: 0.000013875183579705042",
            "extra": "mean: 808.292045654751 usec\nrounds: 679"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1773.968090918506,
            "unit": "iter/sec",
            "range": "stddev: 0.000015171665131920386",
            "extra": "mean: 563.707997409486 usec\nrounds: 1544"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13594.735307051447,
            "unit": "iter/sec",
            "range": "stddev: 0.000004361764981029481",
            "extra": "mean: 73.55788674173822 usec\nrounds: 1863"
          }
        ]
      }
    ]
  }
}