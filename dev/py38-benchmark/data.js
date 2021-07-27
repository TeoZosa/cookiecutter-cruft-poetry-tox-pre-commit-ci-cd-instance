window.BENCHMARK_DATA = {
  "lastUpdate": 1627394842150,
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
          "id": "26ebb8c1636c48162f5f2cfecb8e17f1b509f92d",
          "message": "Merge pull request #132 from TeoZosa/dependabot/github_actions/actions/setup-node-2.3.0",
          "timestamp": "2021-07-27T13:27:24Z",
          "tree_id": "9fefb4c9d42ff0297a71bae868f4b2234b47511c"
        },
        "date": 1627394839442,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 953.6059991782978,
            "unit": "iter/sec",
            "range": "stddev: 0.00022145936333210864",
            "extra": "mean: 1.0486511209678622 msec\nrounds: 496"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1360.9051071751524,
            "unit": "iter/sec",
            "range": "stddev: 0.00016422740160044628",
            "extra": "mean: 734.8050901768694 usec\nrounds: 1242"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8444.979960821864,
            "unit": "iter/sec",
            "range": "stddev: 0.000020402981826007864",
            "extra": "mean: 118.41354326940053 usec\nrounds: 1664"
          }
        ]
      }
    ]
  }
}