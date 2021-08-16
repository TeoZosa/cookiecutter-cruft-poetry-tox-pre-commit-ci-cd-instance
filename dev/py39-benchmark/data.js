window.BENCHMARK_DATA = {
  "lastUpdate": 1629128566442,
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
          "id": "b034fcdb371e5cfefa2ae61207fcfbe62fb438ff",
          "message": "Merge pull request #165 from TeoZosa/dependabot/pip/pygments-2.10.0",
          "timestamp": "2021-08-16T14:50:25Z",
          "tree_id": "a24f62095abb4c26fca4a913c9c6cb3b079b68ed"
        },
        "date": 1629128564360,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 374.0837762649663,
            "unit": "iter/sec",
            "range": "stddev: 0.000024225391046414596",
            "extra": "mean: 2.673197993199504 msec\nrounds: 147"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1065.1407874884148,
            "unit": "iter/sec",
            "range": "stddev: 0.000012600599297281915",
            "extra": "mean: 938.8430259609007 usec\nrounds: 963"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2300.6906060888095,
            "unit": "iter/sec",
            "range": "stddev: 0.000010064752185442788",
            "extra": "mean: 434.6520985279316 usec\nrounds: 883"
          }
        ]
      }
    ]
  }
}