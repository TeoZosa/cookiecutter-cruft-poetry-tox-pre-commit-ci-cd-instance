window.BENCHMARK_DATA = {
  "lastUpdate": 1628864810541,
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
          "id": "c397f6e0dac285044504e2ea0f8e42861d565c3b",
          "message": "Merge pull request #282 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/pip-21.2.4\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@05e51bd",
          "timestamp": "2021-08-13T13:53:01Z",
          "tree_id": "35b420eaeaf2f37a96d3b863469e1650981d3513"
        },
        "date": 1628864654153,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 262.11652556295735,
            "unit": "iter/sec",
            "range": "stddev: 0.0004880089735260856",
            "extra": "mean: 3.8150971132104816 msec\nrounds: 106"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 750.1386041809773,
            "unit": "iter/sec",
            "range": "stddev: 0.0003029689362038864",
            "extra": "mean: 1.333086971429538 msec\nrounds: 735"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1539.3723850558122,
            "unit": "iter/sec",
            "range": "stddev: 0.00012420065978426602",
            "extra": "mean: 649.6153950194082 usec\nrounds: 562"
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
          "id": "cfb156b071a0a8a444414bcdcff93a884d9b89f6",
          "message": "Merge pull request #158 from TeoZosa/dependabot/github_actions/actions/setup-node-2.4.0",
          "timestamp": "2021-08-13T13:36:51Z",
          "tree_id": "fa100e3c09d2cf02724dfd032f498161abd0fb83"
        },
        "date": 1628864807940,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 291.0361374762661,
            "unit": "iter/sec",
            "range": "stddev: 0.00027447496032190574",
            "extra": "mean: 3.435999421486102 msec\nrounds: 121"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 849.873240119051,
            "unit": "iter/sec",
            "range": "stddev: 0.00016421487515440273",
            "extra": "mean: 1.1766460606053664 msec\nrounds: 825"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1695.514810051081,
            "unit": "iter/sec",
            "range": "stddev: 0.00009161234018701636",
            "extra": "mean: 589.7913684221213 usec\nrounds: 779"
          }
        ]
      }
    ]
  }
}