window.BENCHMARK_DATA = {
  "lastUpdate": 1623072177931,
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
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "3ede43598d10ed44b8712890fe6f5872efb57fd5",
          "message": "Merge pull request #203 from TeoZosa/dependabot/github_actions/JamesIves/github-pages-deploy-action-4.1.4\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@3a0ec1a",
          "timestamp": "2021-06-07T13:16:09Z",
          "tree_id": "dea4c9ea3cb9e43da973e0596f245f88dec3cdb7"
        },
        "date": 1623072175647,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1048.1255039089863,
            "unit": "iter/sec",
            "range": "stddev: 0.00017452242460971315",
            "extra": "mean: 954.0842163180821 usec\nrounds: 527"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1410.736591764744,
            "unit": "iter/sec",
            "range": "stddev: 0.00012278290224667182",
            "extra": "mean: 708.8495512468859 usec\nrounds: 722"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9508.570960491064,
            "unit": "iter/sec",
            "range": "stddev: 0.00003490678760125711",
            "extra": "mean: 105.16827440790908 usec\nrounds: 1731"
          }
        ]
      }
    ]
  }
}