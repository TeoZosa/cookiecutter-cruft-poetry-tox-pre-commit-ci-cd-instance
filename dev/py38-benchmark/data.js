window.BENCHMARK_DATA = {
  "lastUpdate": 1630503151423,
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
        "date": 1630503148952,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 365.49156867600624,
            "unit": "iter/sec",
            "range": "stddev: 0.000029445554876008446",
            "extra": "mean: 2.736041226949507 msec\nrounds: 141"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1073.1357922596164,
            "unit": "iter/sec",
            "range": "stddev: 0.00001600638608150636",
            "extra": "mean: 931.8485202085933 usec\nrounds: 965"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2212.1302184456326,
            "unit": "iter/sec",
            "range": "stddev: 0.00001066309523048077",
            "extra": "mean: 452.05295405378814 usec\nrounds: 827"
          }
        ]
      }
    ]
  }
}