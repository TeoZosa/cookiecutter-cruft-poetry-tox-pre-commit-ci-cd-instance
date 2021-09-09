window.BENCHMARK_DATA = {
  "lastUpdate": 1631196355503,
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
        "date": 1631196353348,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 303.4948496755529,
            "unit": "iter/sec",
            "range": "stddev: 0.00004304691883997115",
            "extra": "mean: 3.294948830495926 msec\nrounds: 118"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 878.2351560621065,
            "unit": "iter/sec",
            "range": "stddev: 0.000025369453202600198",
            "extra": "mean: 1.1386471984153665 msec\nrounds: 756"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1799.1738223609966,
            "unit": "iter/sec",
            "range": "stddev: 0.00006659949878824315",
            "extra": "mean: 555.8106657464218 usec\nrounds: 724"
          }
        ]
      }
    ]
  }
}