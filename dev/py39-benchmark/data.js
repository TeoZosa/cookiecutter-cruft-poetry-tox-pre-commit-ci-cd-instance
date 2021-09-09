window.BENCHMARK_DATA = {
  "lastUpdate": 1631196341218,
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
          "id": "fca406d3b9737a25a84c76be037dc4045bfc1304",
          "message": "Merge pull request #212 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-3.1.1",
          "timestamp": "2021-09-09T13:41:54Z",
          "tree_id": "503a1417311af3a32774eac1e90df99f5b786749"
        },
        "date": 1631196338815,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 311.85415419078436,
            "unit": "iter/sec",
            "range": "stddev: 0.00024831957264616887",
            "extra": "mean: 3.2066271574763943 msec\nrounds: 127"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 862.5867369200528,
            "unit": "iter/sec",
            "range": "stddev: 0.0001639144132725436",
            "extra": "mean: 1.1593037050054749 msec\nrounds: 739"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1791.0274714024406,
            "unit": "iter/sec",
            "range": "stddev: 0.00012597327613084915",
            "extra": "mean: 558.3387278906242 usec\nrounds: 735"
          }
        ]
      }
    ]
  }
}