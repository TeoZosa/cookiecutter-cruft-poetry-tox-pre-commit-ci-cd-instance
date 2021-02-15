window.BENCHMARK_DATA = {
  "lastUpdate": 1613428519255,
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
        "date": 1613428518400,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1320.3503531656847,
            "unit": "iter/sec",
            "range": "stddev: 0.00009058852250415181",
            "extra": "mean: 757.3747358815714 usec\nrounds: 549"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1939.2290399354697,
            "unit": "iter/sec",
            "range": "stddev: 0.00006784644152525409",
            "extra": "mean: 515.6688454053248 usec\nrounds: 1436"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14575.628412185337,
            "unit": "iter/sec",
            "range": "stddev: 0.000009381536066945012",
            "extra": "mean: 68.60767657633151 usec\nrounds: 1951"
          }
        ]
      }
    ]
  }
}