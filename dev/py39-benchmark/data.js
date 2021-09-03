window.BENCHMARK_DATA = {
  "lastUpdate": 1630700038413,
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
        "date": 1630700035332,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 296.83832591657404,
            "unit": "iter/sec",
            "range": "stddev: 0.0002936063606506216",
            "extra": "mean: 3.3688372177420525 msec\nrounds: 124"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 848.4070408359436,
            "unit": "iter/sec",
            "range": "stddev: 0.00019784732064535986",
            "extra": "mean: 1.1786795156894152 msec\nrounds: 733"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1776.1578455838521,
            "unit": "iter/sec",
            "range": "stddev: 0.00012574780370262965",
            "extra": "mean: 563.0130241444186 usec\nrounds: 787"
          }
        ]
      }
    ]
  }
}