window.BENCHMARK_DATA = {
  "lastUpdate": 1613428532770,
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
          "id": "15a7e025cd17509a95f3524334e6d0fd5aaea0d3",
          "message": "Merge pull request #64 from TeoZosa/dependabot/github_actions/JamesIves/github-pages-deploy-action-4.0.0\n\n⬆️ Bump JamesIves/github-pages-deploy-action from 3.7.1 to 4.0.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@9185a1d",
          "timestamp": "2021-02-15T22:31:06Z",
          "tree_id": "f708af373be938cb0379d783a3de704190d046da",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/15a7e025cd17509a95f3524334e6d0fd5aaea0d3"
        },
        "date": 1613428531903,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1076.3474647177538,
            "unit": "iter/sec",
            "range": "stddev: 0.00002018623210535147",
            "extra": "mean: 929.0680126814121 usec\nrounds: 552"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1522.544988759991,
            "unit": "iter/sec",
            "range": "stddev: 0.000022422566404340157",
            "extra": "mean: 656.7950421054105 usec\nrounds: 1330"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12220.936893612468,
            "unit": "iter/sec",
            "range": "stddev: 0.000006123220922307874",
            "extra": "mean: 81.82678698902957 usec\nrounds: 1737"
          }
        ]
      }
    ]
  }
}