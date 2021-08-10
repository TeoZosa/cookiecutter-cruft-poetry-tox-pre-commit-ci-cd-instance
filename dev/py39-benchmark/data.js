window.BENCHMARK_DATA = {
  "lastUpdate": 1628602718524,
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
          "id": "f4033e0510900d196733a820adcd64507462c6e8",
          "message": "Merge pull request #156 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-3.1.1",
          "timestamp": "2021-08-10T13:26:33Z",
          "tree_id": "8c474e329d7a9914b225f9e019cb0106157b1596"
        },
        "date": 1628602715982,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 337.58944664937457,
            "unit": "iter/sec",
            "range": "stddev: 0.00018754486986304362",
            "extra": "mean: 2.9621779055155564 msec\nrounds: 127"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 969.4526048532283,
            "unit": "iter/sec",
            "range": "stddev: 0.0000891716006877785",
            "extra": "mean: 1.0315099417896727 msec\nrounds: 859"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2031.5378992179722,
            "unit": "iter/sec",
            "range": "stddev: 0.000039902193330751776",
            "extra": "mean: 492.2379249655859 usec\nrounds: 733"
          }
        ]
      }
    ]
  }
}