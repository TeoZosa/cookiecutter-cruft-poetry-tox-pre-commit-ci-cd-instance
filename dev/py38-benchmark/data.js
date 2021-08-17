window.BENCHMARK_DATA = {
  "lastUpdate": 1629209181675,
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
          "id": "f26d8aad84b3caefb444b820161507f426c17bd2",
          "message": "Merge pull request #167 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-3.1.1",
          "timestamp": "2021-08-17T13:35:48Z",
          "tree_id": "d47a86a7cdf0dda860c9ad6e86903d00eab534bc"
        },
        "date": 1629209179850,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 311.16666964083686,
            "unit": "iter/sec",
            "range": "stddev: 0.00007475343837076285",
            "extra": "mean: 3.2137118064548713 msec\nrounds: 124"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 912.4302255230243,
            "unit": "iter/sec",
            "range": "stddev: 0.000016152694794971123",
            "extra": "mean: 1.095974214824787 msec\nrounds: 796"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1876.6532141956654,
            "unit": "iter/sec",
            "range": "stddev: 0.000011817027919052677",
            "extra": "mean: 532.8634999986401 usec\nrounds: 738"
          }
        ]
      }
    ]
  }
}