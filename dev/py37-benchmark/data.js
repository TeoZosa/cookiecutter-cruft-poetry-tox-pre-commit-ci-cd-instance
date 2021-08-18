window.BENCHMARK_DATA = {
  "lastUpdate": 1629266915024,
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
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "a077183437e1ffc4b40e90fb37d8c8d72a2e65d1",
          "message": "Merge pull request #164 from TeoZosa/dependabot/pip/importlib-metadata-4.6.4",
          "timestamp": "2021-08-18T06:00:28Z",
          "tree_id": "f9de06dbc11c95d29d4e028b2eea2fb98f5204f9"
        },
        "date": 1629266913255,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 308.83434891553946,
            "unit": "iter/sec",
            "range": "stddev: 0.00008902352038158332",
            "extra": "mean: 3.2379817967511175 msec\nrounds: 123"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 896.2552324366283,
            "unit": "iter/sec",
            "range": "stddev: 0.00003893071270262508",
            "extra": "mean: 1.1157535976457547 msec\nrounds: 850"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1850.9093563526212,
            "unit": "iter/sec",
            "range": "stddev: 0.00002327543651488257",
            "extra": "mean: 540.2749716337204 usec\nrounds: 705"
          }
        ]
      }
    ]
  }
}