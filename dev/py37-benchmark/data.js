window.BENCHMARK_DATA = {
  "lastUpdate": 1630503247513,
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
          "id": "1aacd5e0862c783ba038f705cb37c98c20530ee0",
          "message": "Merge pull request #313 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-3.9.7-slim\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ef21523",
          "timestamp": "2021-09-01T13:24:00Z",
          "tree_id": "d9fa3e7cd176f537e716b91499d3b5e5ad999684"
        },
        "date": 1630503244306,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 257.8429520345934,
            "unit": "iter/sec",
            "range": "stddev: 0.0005711316977763099",
            "extra": "mean: 3.878329782176227 msec\nrounds: 101"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 737.5396713296864,
            "unit": "iter/sec",
            "range": "stddev: 0.0003480856381224774",
            "extra": "mean: 1.3558592695049643 msec\nrounds: 705"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1585.46387114321,
            "unit": "iter/sec",
            "range": "stddev: 0.00011105012585995472",
            "extra": "mean: 630.730234980973 usec\nrounds: 749"
          }
        ]
      }
    ]
  }
}