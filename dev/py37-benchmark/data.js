window.BENCHMARK_DATA = {
  "lastUpdate": 1628304728905,
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
        "date": 1628304727127,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1007.9090703167928,
            "unit": "iter/sec",
            "range": "stddev: 0.00001891229882967416",
            "extra": "mean: 992.1529922195194 usec\nrounds: 514"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1420.6334475109227,
            "unit": "iter/sec",
            "range": "stddev: 0.0000633636688431873",
            "extra": "mean: 703.9113444443321 usec\nrounds: 1260"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11096.792893109094,
            "unit": "iter/sec",
            "range": "stddev: 0.000005982721910888652",
            "extra": "mean: 90.11612721194263 usec\nrounds: 1525"
          }
        ]
      }
    ]
  }
}