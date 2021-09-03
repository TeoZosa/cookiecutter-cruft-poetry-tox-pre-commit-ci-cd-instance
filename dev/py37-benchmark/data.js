window.BENCHMARK_DATA = {
  "lastUpdate": 1630700013740,
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
        "date": 1630700010769,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 338.6238395838892,
            "unit": "iter/sec",
            "range": "stddev: 0.000233002525664178",
            "extra": "mean: 2.9531293521118562 msec\nrounds: 142"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 990.7104752159366,
            "unit": "iter/sec",
            "range": "stddev: 0.00010828527765994461",
            "extra": "mean: 1.0093766292135335 msec\nrounds: 801"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2140.860634436854,
            "unit": "iter/sec",
            "range": "stddev: 0.00006316316219932825",
            "extra": "mean: 467.101867311903 usec\nrounds: 829"
          }
        ]
      }
    ]
  }
}