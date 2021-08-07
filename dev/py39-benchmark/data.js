window.BENCHMARK_DATA = {
  "lastUpdate": 1628304693135,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "b7c4ba84c2912012faa8499a49be0bd8067ec309",
          "message": "Merge pull request #272 from TeoZosa/expand-test-harness-to-cover-all-supported-platforms-and-python-versions\n\n👷‍♂️Expand Test Harness to Cover All Supported Platforms and Python Versions\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4b7a89a",
          "timestamp": "2021-08-07T02:38:02Z",
          "tree_id": "4f63388b4dc21708a8f9a57b584d1d44d4503ad4"
        },
        "date": 1628304691585,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1308.1893827271276,
            "unit": "iter/sec",
            "range": "stddev: 0.00008372648186332893",
            "extra": "mean: 764.4153157055455 usec\nrounds: 624"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1929.5274063917645,
            "unit": "iter/sec",
            "range": "stddev: 0.00006467138460605319",
            "extra": "mean: 518.2616202741634 usec\nrounds: 1825"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 16352.346913756079,
            "unit": "iter/sec",
            "range": "stddev: 0.000010014691919971028",
            "extra": "mean: 61.15330143581839 usec\nrounds: 2299"
          }
        ]
      }
    ]
  }
}