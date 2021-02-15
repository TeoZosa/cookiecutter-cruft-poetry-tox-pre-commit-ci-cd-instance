window.BENCHMARK_DATA = {
  "lastUpdate": 1613428514467,
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
        "date": 1613428513572,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1110.1501552173886,
            "unit": "iter/sec",
            "range": "stddev: 0.000029219026660061107",
            "extra": "mean: 900.7790480416417 usec\nrounds: 562"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1651.6298869516195,
            "unit": "iter/sec",
            "range": "stddev: 0.000028821628989766756",
            "extra": "mean: 605.4625239590937 usec\nrounds: 1273"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14131.433861011918,
            "unit": "iter/sec",
            "range": "stddev: 0.0000064189176758185925",
            "extra": "mean: 70.76422745457994 usec\nrounds: 1996"
          }
        ]
      }
    ]
  }
}