window.BENCHMARK_DATA = {
  "lastUpdate": 1620921745507,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "4f8a9d07e055798733de284b9fef663d504682e9",
          "message": "Merge pull request #165 from TeoZosa/dependabot/github_actions/ahmadnassri/action-dependabot-auto-merge-2.4\n\n⬆️ Bump ahmadnassri/action-dependabot-auto-merge from 2 to 2.4\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ff9d2fd",
          "timestamp": "2021-05-13T15:57:37Z",
          "tree_id": "8445ea8e8cb8b93f3c3ba94c5506e1eb84dd3424",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/4f8a9d07e055798733de284b9fef663d504682e9"
        },
        "date": 1620921744132,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1167.5007608989024,
            "unit": "iter/sec",
            "range": "stddev: 0.00007082867823019902",
            "extra": "mean: 856.5304910208904 usec\nrounds: 668"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1721.6329273765928,
            "unit": "iter/sec",
            "range": "stddev: 0.000050326718141629055",
            "extra": "mean: 580.8439093481966 usec\nrounds: 1445"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13735.488353127817,
            "unit": "iter/sec",
            "range": "stddev: 0.000009691521927185157",
            "extra": "mean: 72.8041096385395 usec\nrounds: 1806"
          }
        ]
      }
    ]
  }
}