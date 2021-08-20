window.BENCHMARK_DATA = {
  "lastUpdate": 1629476714581,
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
          "id": "12785a76f60117e8b0dbc2a43e0db7d647e063e9",
          "message": "Merge pull request #295 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/poetry-1.1.8\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e2baf71",
          "timestamp": "2021-08-20T15:27:15Z",
          "tree_id": "486d2eea2e0740cef0502bf9004ee910301efc77"
        },
        "date": 1629476457801,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 343.9895380145446,
            "unit": "iter/sec",
            "range": "stddev: 0.00018786627480620567",
            "extra": "mean: 2.907065156027268 msec\nrounds: 141"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1003.0772311929658,
            "unit": "iter/sec",
            "range": "stddev: 0.0000890321666332703",
            "extra": "mean: 996.9322091088579 usec\nrounds: 966"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1996.6369270987577,
            "unit": "iter/sec",
            "range": "stddev: 0.00004768619315570674",
            "extra": "mean: 500.84218438905884 usec\nrounds: 884"
          }
        ]
      },
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
          "id": "2bc28f58ce1f7a165fbbae6bfcc42b441091848e",
          "message": "Merge pull request #179 from TeoZosa/dependabot/pip/hypothesis-6.14.9",
          "timestamp": "2021-08-20T14:55:31Z",
          "tree_id": "7ba428a6b3e0af78ff6ec7d85edcf4189a20a570"
        },
        "date": 1629476712425,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 357.135576566376,
            "unit": "iter/sec",
            "range": "stddev: 0.00002382750730556288",
            "extra": "mean: 2.800057080883241 msec\nrounds: 136"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1036.224290877296,
            "unit": "iter/sec",
            "range": "stddev: 0.000015941982636239815",
            "extra": "mean: 965.0420365588733 usec\nrounds: 930"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2164.323156031995,
            "unit": "iter/sec",
            "range": "stddev: 0.00001085416543129947",
            "extra": "mean: 462.0382114440664 usec\nrounds: 804"
          }
        ]
      }
    ]
  }
}