window.BENCHMARK_DATA = {
  "lastUpdate": 1624889985796,
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
          "id": "5b2506eabaa17cf0411ce67385507ddac676322b",
          "message": "Merge pull request #80 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-3.1.1",
          "timestamp": "2021-06-28T13:17:42Z",
          "tree_id": "73e2bf8c97d54b5f844cab83ce37e4eddd594e19"
        },
        "date": 1624889983551,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1032.9341876928822,
            "unit": "iter/sec",
            "range": "stddev: 0.00030079941604405655",
            "extra": "mean: 968.1158895839795 usec\nrounds: 480"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1416.980529870068,
            "unit": "iter/sec",
            "range": "stddev: 0.00022390138283372914",
            "extra": "mean: 705.7259989956929 usec\nrounds: 995"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8866.653865596656,
            "unit": "iter/sec",
            "range": "stddev: 0.000038016616573693065",
            "extra": "mean: 112.78211771411108 usec\nrounds: 1733"
          }
        ]
      }
    ]
  }
}