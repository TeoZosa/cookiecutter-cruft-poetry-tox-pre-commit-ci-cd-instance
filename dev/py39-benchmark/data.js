window.BENCHMARK_DATA = {
  "lastUpdate": 1629126658012,
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
          "id": "d6224ed9d3f3b6e813bf108883975ddcd627759c",
          "message": "Merge pull request #284 from TeoZosa/dependabot/pip/pygments-2.10.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8dd499e",
          "timestamp": "2021-08-16T14:28:11Z",
          "tree_id": "2d68578a7c684326b3d344aff492e90b1aec7c63"
        },
        "date": 1629126549700,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 372.2348562580929,
            "unit": "iter/sec",
            "range": "stddev: 0.00003060489971184251",
            "extra": "mean: 2.6864759793119415 msec\nrounds: 145"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1063.2607821745826,
            "unit": "iter/sec",
            "range": "stddev: 0.00001486555426428093",
            "extra": "mean: 940.5030419299379 usec\nrounds: 954"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2295.300298227667,
            "unit": "iter/sec",
            "range": "stddev: 0.000010371407157013469",
            "extra": "mean: 435.6728401822443 usec\nrounds: 876"
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
          "id": "ae166c73a328227c8afa465d6dc33e21be948614",
          "message": "Merge pull request #162 from TeoZosa/dependabot/github_actions/actions/setup-node-2.4.0",
          "timestamp": "2021-08-16T13:28:30Z",
          "tree_id": "6df755f6fca06de06ddb8321eb0353cbe35ca658"
        },
        "date": 1629126655781,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 334.9660739275357,
            "unit": "iter/sec",
            "range": "stddev: 0.00013058848596486346",
            "extra": "mean: 2.985376961537703 msec\nrounds: 130"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 941.4521200002699,
            "unit": "iter/sec",
            "range": "stddev: 0.0000646004187450614",
            "extra": "mean: 1.0621889087675678 msec\nrounds: 844"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2016.5730366007094,
            "unit": "iter/sec",
            "range": "stddev: 0.0000340469564651532",
            "extra": "mean: 495.8907918781245 usec\nrounds: 788"
          }
        ]
      }
    ]
  }
}