window.BENCHMARK_DATA = {
  "lastUpdate": 1628304584571,
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
        "date": 1628304582699,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1196.370690585618,
            "unit": "iter/sec",
            "range": "stddev: 0.00011055961684051505",
            "extra": "mean: 835.8613328369861 usec\nrounds: 673"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1725.4716836460168,
            "unit": "iter/sec",
            "range": "stddev: 0.00007013912635100426",
            "extra": "mean: 579.5516724371535 usec\nrounds: 1502"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10804.163196739952,
            "unit": "iter/sec",
            "range": "stddev: 0.000016660383747614387",
            "extra": "mean: 92.55691364433852 usec\nrounds: 2096"
          }
        ]
      }
    ]
  }
}