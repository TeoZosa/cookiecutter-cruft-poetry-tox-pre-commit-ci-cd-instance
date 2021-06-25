window.BENCHMARK_DATA = {
  "lastUpdate": 1624639949099,
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
          "id": "00103c1542333355db51e7652c7b48af2cda9c7f",
          "message": "Merge pull request #50 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-3.1.1",
          "timestamp": "2021-06-25T16:44:56Z",
          "tree_id": "fcaca89ea364772e37ab1eb4761a68c342fe4d68"
        },
        "date": 1624639947077,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1023.3753848150546,
            "unit": "iter/sec",
            "range": "stddev: 0.00014912007890774043",
            "extra": "mean: 977.1585430313247 usec\nrounds: 488"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1437.5721891191129,
            "unit": "iter/sec",
            "range": "stddev: 0.00011244719619028087",
            "extra": "mean: 695.6172410463507 usec\nrounds: 1452"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9975.524677867508,
            "unit": "iter/sec",
            "range": "stddev: 0.000027327044776714906",
            "extra": "mean: 100.24535373248882 usec\nrounds: 1487"
          }
        ]
      }
    ]
  }
}