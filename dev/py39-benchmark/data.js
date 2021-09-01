window.BENCHMARK_DATA = {
  "lastUpdate": 1630503270944,
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
        "date": 1630503268097,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 279.1386857307087,
            "unit": "iter/sec",
            "range": "stddev: 0.0005327976753924442",
            "extra": "mean: 3.582448621846426 msec\nrounds: 119"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 802.4150819863344,
            "unit": "iter/sec",
            "range": "stddev: 0.00021982407802223058",
            "extra": "mean: 1.2462377919474732 msec\nrounds: 745"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1636.3243906069677,
            "unit": "iter/sec",
            "range": "stddev: 0.00020641196713136928",
            "extra": "mean: 611.1257680569477 usec\nrounds: 720"
          }
        ]
      }
    ]
  }
}