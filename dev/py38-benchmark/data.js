window.BENCHMARK_DATA = {
  "lastUpdate": 1630700007923,
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
          "id": "2697b79d609299275ae8af90f4e31426e9492f71",
          "message": "Merge pull request #195 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-3.1.1",
          "timestamp": "2021-09-03T19:55:19Z",
          "tree_id": "76146ec16e4e037cc33058a429ac0e5b2eca9df4"
        },
        "date": 1630700005385,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 321.941508695827,
            "unit": "iter/sec",
            "range": "stddev: 0.0001370135238365582",
            "extra": "mean: 3.1061542950797567 msec\nrounds: 122"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 997.8513969663036,
            "unit": "iter/sec",
            "range": "stddev: 0.00008822813089594284",
            "extra": "mean: 1.0021532294690658 msec\nrounds: 828"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2138.8898947096422,
            "unit": "iter/sec",
            "range": "stddev: 0.00005589359990866947",
            "extra": "mean: 467.53224767362394 usec\nrounds: 860"
          }
        ]
      }
    ]
  }
}