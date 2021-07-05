window.BENCHMARK_DATA = {
  "lastUpdate": 1625492315006,
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
          "id": "2e1f63803057ae04284381f4f94b8eb68194c0df",
          "message": "Merge pull request #239 from TeoZosa/dependabot/pip/hypothesis-6.14.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c4d04e3",
          "timestamp": "2021-07-05T13:28:35Z",
          "tree_id": "406cddef54f9e28e5a1b0a60611c7168872580b3"
        },
        "date": 1625492313190,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 885.6005182810235,
            "unit": "iter/sec",
            "range": "stddev: 0.00025592594398751077",
            "extra": "mean: 1.1291772976161185 msec\nrounds: 504"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1252.240892461326,
            "unit": "iter/sec",
            "range": "stddev: 0.00018635996025561543",
            "extra": "mean: 798.5683952825266 usec\nrounds: 1060"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8337.768731860162,
            "unit": "iter/sec",
            "range": "stddev: 0.00005099489972657337",
            "extra": "mean: 119.93616423765921 usec\nrounds: 1784"
          }
        ]
      }
    ]
  }
}