window.BENCHMARK_DATA = {
  "lastUpdate": 1620921761724,
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
        "date": 1620921760421,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1088.4091645338847,
            "unit": "iter/sec",
            "range": "stddev: 0.00003668611188187563",
            "extra": "mean: 918.7721241103787 usec\nrounds: 564"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1558.097660968984,
            "unit": "iter/sec",
            "range": "stddev: 0.00002899495600348014",
            "extra": "mean: 641.8082929269646 usec\nrounds: 1386"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12027.810067508157,
            "unit": "iter/sec",
            "range": "stddev: 0.000007113516796747409",
            "extra": "mean: 83.14065439904087 usec\nrounds: 1603"
          }
        ]
      }
    ]
  }
}